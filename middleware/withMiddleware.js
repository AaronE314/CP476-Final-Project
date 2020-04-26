

import database from './database';
import databaseUpdater from './databaseUpdater';
import databaseReadOnly from './ReadOnlydatabase';
import auth from './auth';
const cookieParser = require('cookie-parser');


const applyMiddleware = (handler, type = "normal") => {

    handler.use(cookieParser());
    handler.use(auth);

    if (type === "normal") {
        handler.use(database);
    } else if (type === "updater") {
        handler.use(databaseUpdater);
    } else if (type === "readonly") {
        handler.use(databaseReadOnly);
    }

}

export default applyMiddleware;