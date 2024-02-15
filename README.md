
---

# Session Management Module

This module provides functions for creating and restoring sessions using credentials stored in JSON files. It includes functions for initializing a new session and restoring a session after each restart.

## Installation

To use this module, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/miow7083/session-Maker.git
    ```

2. Install dependencies:

    ```bash
    npm install session-management-module
    ```

3. Import the module in your project:

    ```javascript
    import { CreateSession, RestoreSession } from 'session-management-module';
    ```

## Usage

### Creating a New Session

To create a new session, call the `CreateSession` function with the desired session ID and, optionally, the folder path for authentication information.

```javascript
await CreateSession('mySessionID', 'auth_info_folder');
```

### Restoring a Session

To restore a session after each restart, call the `RestoreSession` function with the session ID and, optionally, the folder path for authentication information.

```javascript
await RestoreSession('mySessionID', 'auth_info_folder');
```

## Parameters

- `sessionID` (string): The unique identifier for the session.
- `AuthFolder` (string, optional): The folder path for authentication information. Defaults to `'auth_info_baileys'`.

## File Structure

- `session-management-module.js`: Main module file containing the `CreateSession` and `RestoreSession` functions.
- `Model.js`: Module file containing functions `MakeSession` and `restoreSession`.
- `README.md`: This file, containing information about the module.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Credits

- Module Author: [@7thRA-ONE](https://github.com/7thRA-ONE)
- Based on: [Baileys](https://github.com/adiwajshing/Baileys)

--- 
