
import nextConnect from 'next-connect';
// import middleware from '../../../middleware/database';

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handler = nextConnect();

handler.use(cookieParser());

handler.get(async (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        res.json({loggedIn: false, validToken: false});
    } else {

        try {
            let payload = jwt.verify(token, process.env.jwtSecret);
            res.json({loggedIn: true, validToken: true, payload});
        } catch(err) {
            res.json({loggedIn: true, validToken: false});
        }

    }

});

export default (req, res) => handler.apply(req, res);