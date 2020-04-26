import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import { session } from 'next-session';
import auth from './auth';
// import {getReadOnlyDb} from './getClients';


const client = new MongoClient(process.env.MONGODB_URI_READONLY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function databaseReadOnly(req, res, next) {
  try {
    if (!client.isConnected()) await client.connect().catch(function(err){throw err; });
    req.dbClient = client;
    req.db = client.db('CP476Main');
    // req.db = await getReadOnlyDb();
    return next();
  }catch(err){
    throw err; 
  }
}

<<<<<<< HEAD
const middleware = nextConnect();
client.on('connectionPoolCreated', event => console.dir(event));
client.on('connectionPoolClosed', event => console.dir(event));
client.on('connectionCreated', event => console.dir(event));
client.on('connectionReady', event => console.dir(event));
client.on('connectionClosed', event => console.dir(event));
client.on('connectionCheckOutStarted', event => console.dir(event));
client.on('connectionCheckOutFailed', event => console.dir(event));
client.on('connectionCheckedOut', event => console.dir(event));
client.on('connectionCheckedIn', event => console.dir(event));
client.on('connectionPoolCleared', event => console.dir(event));

middleware.use(databaseReadOnly);
=======
>>>>>>> 94dabbf2da2ed136bf7b620c8bb62299b2f08ec7
export default databaseReadOnly;