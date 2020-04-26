
import nextConnect from 'next-connect';
import applyMiddleware from '../../../middleware/withMiddleware';
// import middleware from '../../../middleware/database';
import cookies from '../../../lib/cookies';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler);

handler.post(async (req, res) => {

    console.log("boom");
    res.end();
});


export default (req, res) => handler.apply(req, res);