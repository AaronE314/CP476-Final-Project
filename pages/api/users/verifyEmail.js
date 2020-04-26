import nextConnect from 'next-connect';
import applyMiddleware from '../../../middleware/withMiddleware';
// import middleware from '../../../middleware/databaseUpdater';
import {resendVerification} from '../../../lib/email';
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handler = nextConnect();
// handler.use(middleware);
applyMiddleware(handler);

/**
 * @author Chris Labatt
 * @public
 * @summary A post request for verifying the user's email address and updating the database to confirm it. 
 * @argument token The JWT containing the userID.
 */

handler.post(async (req, res) => {
    console.log("Verifying Email");
    let {token} = JSON.parse(req.body);
    try{
        //Decodes and verifies the token, will throw an error if passed expiry date.
        const decodedToken = jwt.verify(token, process.env.jwtVerify);
        const userID = decodedToken.username;

        //Searches for the user in the DB and updates their verified flag to signal that they have verified.
        let doc = await req.db.collection('Users').findOneAndUpdate({"email" : userID }, {$set: {"verified": true}});
        res.send({
            status: 'ok',
            message: 'Email has been verified.'
        });
    }
    catch(err){
        console.log(err);
        if(err.name == 'JsonWebTokenError'){
            //Error occurs when a token is passed its expiry date.
            const userEmail = jwt.decode(token).username;
            resendVerification(userEmail)
            .then((e) => {
                res.send({
                    status: 'TokenExpired',
                    message: 'The token used for verification has expired. A new one will be sent.'
                });
            });
        }
        else{
            res.send({
                status: err.name,
                message: err.message
            });
        }
    }
});

export default (req, res) => handler.apply(req, res) 