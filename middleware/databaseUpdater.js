import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import { session } from 'next-session';
import auth from './auth';

const cookieParser = require('cookie-parser');

const client = new MongoClient(process.env.MONGODB_URI_WRITER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function database(req, res, next) {
  try {
   
    if (!client.isConnected()) await client.connect().catch(function(err){throw err; });
    req.dbClient = client;
    req.db = client.db('CP476Main');
    return next();
  }catch(err){
    throw err; 
  }
}

const middleware = nextConnect();

// middleware.use(headerSet);
middleware.use(cookieParser());
middleware.use(auth);

middleware.use(database);
middleware.use(session());

export default middleware;