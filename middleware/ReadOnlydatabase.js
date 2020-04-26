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
client.on('connectionPoolCreated', event => {});
client.on('connectionPoolClosed', event => {});
client.on('connectionCreated', event => {});
client.on('connectionReady', event => {});
client.on('connectionClosed', event => {});
client.on('connectionCheckOutStarted', event => {});
client.on('connectionCheckOutFailed', event => {});
client.on('connectionCheckedOut', event => {});
client.on('connectionCheckedIn', event => {});
client.on('connectionPoolCleared', event => {});
export default databaseReadOnly;