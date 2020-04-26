import { MongoClient } from 'mongodb';

let ROdb;
let UPdb;
let db;

const readOnlyDb = new MongoClient(process.env.MONGODB_URI_READONLY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Db = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const updaterDb = new MongoClient(process.env.MONGODB_URI_WRITER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log("RUNNING");


const getReadOnlyDb = async () => {
    console.log("ro");
    if (!ROdb) {
        console.log("newRo");
        if (!readOnlyDb.isConnected()) await readOnlyDb.connect().catch(function(err){throw err; });
        ROdb = readOnlyDb.db('CP476Main');
    }

    return ROdb;

}

const getUpdaterDb = async () => {

    console.log("up")
    if (!UPdb) {
        console.log("newUp");
        if (!updaterDb.isConnected()) await updaterDb.connect().catch(function(err){throw err; });
        UPdb = updaterDb.db('CP476Main');
    }

    return UPdb;

}

const getDb = async () => {
    
    console.log("db");
    if (!db) {
        console.log("newDb");
        if (!Db.isConnected()) await Db.connect().catch(function(err){throw err; });
        db = Db.db('CP476Main');
    }

    return db;

}


export {
    getReadOnlyDb,
    getUpdaterDb,
    getDb
}