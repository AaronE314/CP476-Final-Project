

const jwt = require('jsonwebtoken');
require('dotenv').config();

const securePaths = [];

const auth = (req, res, next) => {

    const token = req.cookies.token;

    if (!securePaths.includes(req.url)) {
        return next();
    }

    if (!token) {
        console.log("no token");
        res.status(401).send('Unauthorized: No token provided');
    } else {

        try {
            let decoded = jwt.verify(token, process.env.jwtSecret);
            console.log("valid");
            req.email = decoded.email;
            req.admin = decoded.admin;
            return next();
        } catch(err) {
            console.log("not valid");
            res.status(401).send('Unauthorized: Invalid token');
        }

    }
}

export default auth;