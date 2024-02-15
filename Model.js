/**
 *
 * @ts module
 * @param {string} sessionID
 * @ts author <@7thRA-ONE>
 */


//GIVE CREDIT BISH >//<


import mongoose from 'mongoose';

let URL = process.env.MONGO|| 'mongodb+srv://z:z@cluster0.sy21r5d.mongodb.net/?retryWrites=true&w=majority';
const options = {
    socketTimeoutMS: 30000,
};
const SessionDB = mongoose.createConnection(URL, options);

const SessionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    SessionID: { type: String },
    SessionCreds: { type: String },
    createdAt: { type: Date, default: new Date() }
});

const Session = SessionDB.model('Sessions', SessionSchema);

export default Session;

const MakeSession = async (SessionID, creds) => {
    const CheckSession = await Session.findOne({ id: SessionID });
    if (CheckSession) {
        return { success: false, data: 'Session id exists' };
    } else {
      const newId = new mongoose.Types.ObjectId();
        const NewSession = new Session({
            id: newId,
            SessionID: SessionID,
            SessionCreds: creds,
        });
        await NewSession.save();
        return { success: true, data: NewSession };
    }
};


const restoreSession = async (sessionID) => {
    try {
        const session = await Session.findOne({ SessionID: sessionID });
        return session;
    } catch (error) {
        console.error('Error finding session by SessionID:', error);
        throw error;
    }
};


export { MakeSession,

        restoreSession
       };
