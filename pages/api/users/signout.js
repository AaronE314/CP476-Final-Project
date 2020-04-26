
import nextConnect from 'next-connect';
import applyMiddleware from '../../../middleware/withMiddleware';
// import middleware from '../../../middleware/database';
import cookies from '../../../lib/cookies';

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler);

handler.post(async (req, res) => {

    if (req.email) {
        req.email = undefined;
        res.cookie('token', "", { httpOnly: true, maxAge: 0});
        
        res.send({
            status: 'ok',
            message: "User sucessfully signed out"
        });
    } else {
        

        res.send({
            status: 'error',
            message: "No User signed In"
        });
    }
});


export default cookies((req, res) => handler.apply(req, res));