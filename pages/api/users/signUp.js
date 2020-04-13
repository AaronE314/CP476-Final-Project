/**
 * @author Austin Bursey
 * @author Aaron Exley
 * @public
 * @summary [NOT DONE] needs error codes 
 * @argument email [in body] that you would like to add to collection. 
 */
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

import * as argon2 from 'argon2';
import isEmail from 'validator/lib/isEmail';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {

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
            req.session.userId = user.insertedId;
            res.status(201).send({
                status: 'ok',
                message: 'User signed up seccessfully'
            });
        })
        .catch(error => res.send({
            status: 'error',
            message: error.toString()
        }));

});

export default (req, res) => handler.apply(req, res) 