

const jwt = require('jsonwebtoken');
require('dotenv').config();

const securePaths = [""];

const auth = (req, res, next) => {

    console.log("auth");

    // for secure requests
    if (securePaths.includes(req.path)) {
        
        const token = req.headers.authorization

        try {
            jwt.verify(token, process.env.jwtSecret)
        } catch (err) {
            return res.status(401).json({message: err.message})
        }
    }

    return next();

}

export default auth;