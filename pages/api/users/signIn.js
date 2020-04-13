/**
 * @author Austin Bursey
 * @public
 * @summary Post request Signs a user in given email
 * @argument email [in body] that you would like to add to collection. 
 */
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import * as argon2 from 'argon2';

const handler = nextConnect();

handler.use(middleware);


handler.post(async (req, res) => {

    let body = req.body
    let { email, password } = JSON.parse(body);

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
            req.session.userId = user._id;
            return res.send({
                status: 'ok',
                message: 'login Successfull'
            });
        })
        .catch(error => res.send({
            status: 'error',
            message: error.toString()
        }));

});

export default (req, res) => handler.apply(req, res);