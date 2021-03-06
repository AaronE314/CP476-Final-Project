import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import { session } from 'next-session';
import auth from './auth';
// import {getDb} from './getClients';


const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function database(req, res, next) {
  try {
    if (!client.isConnected()) await client.connect().catch(function(err){throw err; });
    req.dbClient = client;
    req.db = client.db('CP476Main');
    // req.db = await getDb();
    return next();
  }catch(err){
    throw err; 
  }
}

export default database;