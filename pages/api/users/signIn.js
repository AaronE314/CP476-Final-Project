/**
 * @author Aaron Exley
 * @public
 * @summary Post request Signs a user in given email
 * @argument email [in body] user email.
 * @argument password [in body] user password. 
 */
import nextConnect from 'next-connect';
import applyMiddleware from '../../../middleware/withMiddleware';
import * as argon2 from 'argon2';
import cookies from '../../../lib/cookies';

const jwt = require('jsonwebtoken');
require('dotenv').config();

let handler = nextConnect();

applyMiddleware(handler);

handler.post(async (req, res) => {

    let body = req.body
    let { email, password, expires } = JSON.parse(body);

    return req.db.collection('Users').findOne({ email })
        .then((user) => {
            
            if (user) {
                return argon2.verify(user.password, password)
                    .then((result) => {
                        if (result) {
                            return Promise.resolve(user);
                        }
                        return Promise.reject(Error("The password you entered is incorrect"));
                    });
            }
            return Promise.reject(Error("The email does not exist"));
        })
        .then((user) => {
            const token = jwt.sign({ username: user.email, admin: user.admin}, process.env.jwtSecret, {expiresIn: '7d'});
            let options = { httpOnly: true, path: "/"};
            if (expires) {
                options = { httpOnly: true, maxAge: 604800, path: "/"}
            }

            res.cookie('token', token, options);
            return res.send({
                status: 'ok',
                message: 'login Successfull',
                userInfo: {email: user.email, 
                           wishlist: user.wishlist,
                           shoppingCart: user.shoppingCart}
            });
        })
        .catch(error => {
            
            res.send({
                status: 'error',
                message: error.toString()
            })
        });

});

export default cookies((req, res) => handler.apply(req, res));