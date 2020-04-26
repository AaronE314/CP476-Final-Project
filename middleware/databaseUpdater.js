import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import { session } from 'next-session';
import auth from './auth';
// import {getUpdaterDb} from './getClients'

const cookieParser = require('cookie-parser');

const client = new MongoClient(process.env.MONGODB_URI_WRITER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function databaseUpdater(req, res, next) {
  try {
    if (!client.isConnected()) await client.connect().catch(function(err){throw err; });
    req.dbClient = client;
    req.db = client.db('CP476Main');
    // req.db = await getUpdaterDb();
    return next();
  }catch(err){
    throw err; 
  }
}


const middleware = nextConnect();

middleware.use(databaseUpdater);
export default databaseUpdater;