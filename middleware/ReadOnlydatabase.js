import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import { session } from 'next-session';

const client = new MongoClient(process.env.MONGODB_URI_READONLY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
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

middleware.use(database);
middleware.use(session());

export default middleware;