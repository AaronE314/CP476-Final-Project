import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('{mongodb+srv://DBConnectUser:<user>@cluster0-tvjb2.mongodb.net/test?retryWrites=true&w=majority}', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('StoreProducts');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;