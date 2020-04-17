
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

    if (req.session.userId) {
        req.session.userId = undefined;
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