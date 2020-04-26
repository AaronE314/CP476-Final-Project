

const jwt = require('jsonwebtoken');
require('dotenv').config();

const securePaths = [];

const auth = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        // console.log("no token");
        
        if (!securePaths.includes(req.url)) {
            return next();
        } else {
            res.status(401).send('Unauthorized: No token provided');
        }

    } else {

        try {

            let decoded = jwt.verify(token, process.env.jwtSecret);
            // console.log("valid");
            req.email = decoded.username;
            req.admin = decoded.admin;
            return next();
        } catch(err) {
            // console.log("not valid");

            if (!securePaths.includes(req.url)) {
                return next();
            } else {
                res.status(401).send('Unauthorized: Invalid token');
            }
        }

    }
}

export default auth;