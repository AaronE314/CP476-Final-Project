import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient("mongodb+srv://root:toor@cluster0-tvjb2.mongodb.net/test?retryWrites=true&w=majority", {
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

export default middleware;