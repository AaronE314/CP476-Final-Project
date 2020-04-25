import nextConnect from 'next-connect';
import middleware from '../../../middleware/databaseUpdater';
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handler = nextConnect();
handler.use(middleware);

/**
 * @author Chris Labatt
 * @public
 * @summary post request for verifying the user's email address and updating the database to confirm it. 
 * @argument token The JWT containing the userID.
 */

handler.post(async (req, res) => {
    console.log("Verifying Email");
    try{
        let {token} = JSON.parse(req.body);
        const decodedToken = jwt.verify(token, process.env.jwtSecret);
        const userID = decodedToken.username;

        let doc = await req.db.collection('Users').findOneAndUpdate({"email" : userID }, {$set: {"verified": true}});
        res.send({
            status: 'ok',
            message: 'Email has been verified'
        });
    }
    catch(err){
        if(err.name == 'JsonWebTokenError'){
            res.send({
                status: 'TokenExpired',
                message: 'The token used for verification has expired. A new one will be sent to you.'
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