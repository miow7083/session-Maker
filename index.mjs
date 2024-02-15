/**
 *
 * @ts module
 * @param {string} sessionID
 * @param {string} [AuthFolder]
 * @ts author <@7thRA-ONE>
 * @returns {Promise<void>}
 */


//GIVE CREDIT BISH >//<


import fs from 'fs';
import { MakeSession, restoreSession } from './Model.mjs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Creates a new session using credentials from a JSON file.
 * @param {string} sessionID - The session ID.
 * @param {string} [AuthFolder] - The folder path for authentication information. Defaults to 'auth_info_baileys'.
 * @returns {Promise<void>}
 */

// For initial storing the creds on MongoDB, Use this func after scanning the QR code or using the paricode

const CreateSession = async (sessionID, AuthFolder = 'auth_info_baileys') => {
  try {
    if (!fs.existsSync(AuthFolder)) {
      fs.mkdirSync(AuthFolder);
    }

    const creds = fs.readFileSync(`${AuthFolder}/creds.json`, 'utf8');
    const newSession = await MakeSession(sessionID, creds);
    console.log(newSession);
  } catch (error) {
    console.error('Error creating session:', error);
  }
}



/**
 * Restores a session using the provided session ID and writes the session credentials to a JSON file.
 * @param {string} sessionID - The session ID.
 * @param {string} [AuthFolder] - The folder path for authentication information. Defaults to 'auth_info_baileys'.
 * @returns {Promise<void>}
 */

//For restoring the creds from MongoDB, Use this func for restoring after each restart, Replace the filepath with the path of the your Auth creds.json file

const RestoreSession = async (sessionID, AuthFolder = 'auth_info_baileys') => {
  try {
    if (!fs.existsSync(AuthFolder)) {
      fs.mkdirSync(AuthFolder);
    }

    if (!sessionID) {
      throw new Error('Session ID not provided');
    }

    const session = await restoreSession(sessionID);

    await fs.promises.writeFile(`${AuthFolder}/creds.json`, session.SessionCreds, "utf8");
    console.log('Session restored successfully.');
  } catch (error) {
    console.error('Error restoring session:', error);
  }
}

/* (async () => {
  await RestoreSession('hi', 'hi2');
})();

} */

export { CreateSession, RestoreSession };


// For compatibility with CommonJS
module.exports = { CreateSession, RestoreSession };
