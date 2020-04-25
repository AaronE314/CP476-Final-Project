/**
 * @author Austin Bursey
 * @author Aaron Exley
 * @public
 * @summary [NOT DONE] needs error codes 
 * @argument email [in body] that you would like to add to collection. 
 */
import nextConnect from 'next-connect';
// import middleware from '../../../middleware/database';
import applyMiddleware from '../../../middleware/withMiddleware';

import * as argon2 from 'argon2';
import isEmail from 'validator/lib/isEmail';
import cookies from '../../../lib/cookies';

const jwt = require('jsonwebtoken');
require('dotenv').config();

const handler = nextConnect();

// handler.use(middleware);
applyMiddleware(handler);

handler.post(async (req, res) => {

    // console.log("signUp");

    let body = JSON.parse(req.body);

    let {email, password} = body;

    if (!isEmail(email)) {
        return res.send({
            status: "error",
            message: "The email you entered is invalid."
        });
    }

    return req.db.collection('Users').countDocuments({ email })
        .then((count) => {
            if (count) { 
                return Promise.reject(Error('The email has already been used.'));
            }

            return argon2.hash(password);

        }).then(hashedPassword => req.db.collection('Users').insertOne({
            email,
            password: hashedPassword,
            wishlist: [],
            shoppingCart: []
        }))
        .then((user) => {
            // req.session.userId = user.insertedId;
            const addedUser = user.ops[0]
            const token = jwt.sign({ username: addedUser.email, admin: addedUser.admin}, process.env.jwtSecret, {expiresIn: '7d'});
            res.cookie('token', token, { httpOnly: true, path: "/"});
            console.log("closing");
            try {
                req.dbClient.close().catch();
            } catch(e) {
                
            }
            res.status(201).send({
                status: 'ok',
                message: 'User signed up seccessfully',
                userInfo: {email: addedUser.email, 
                           wishlist: addedUser.wishlist,
                           shoppingCart: addedUser.shoppingCart}
            });
        })
        .catch(error => {
            console.log("closing");
            try {
                req.dbClient.close().catch();
            } catch(e) {
                
            }
            res.send({
                status: 'error',
                message: error.toString()
            })
        });

});

export default cookies((req, res) => handler.apply(req, res));