import { URLString } from '../constants'
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.emailUser,
        pass: process.env.emailPass
    }
});

/**
 * @author Chris Labatt
 * @public
 * @summary Sends an email to the user asking them to verify themself
 * @argument clientEmail The email that the user used to sign up
 */
export async function sendVerification(clientEmail){
    const token = jwt.sign({username:clientEmail}, process.env.jwtVerify,{expiresIn: '14d'});
    var emailContent = {
        from: process.env.emailUser,
        to: clientEmail,
        subject: "Confirmation Email",
        text: `Thank you for creating an account with us.\nPlease verify your email by clicking the link below:\n
        ${URLString}/emailVerify?ver=${token}\nThis verification will expire in 14 days` //Change URL when it's set up on a domain
    };

    transporter.sendMail(emailContent, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: ' + info.response);
        }
    });
}

/**
 * @author Chris Labatt
 * @public
 * @summary Sends a new email to the user asking them to verify themself after the old one expired.
 * @argument clientEmail The email that the user used to sign up
 */
export async function resendVerification(clientEmail){
    const token = jwt.sign({username:clientEmail}, process.env.jwtVerify,{expiresIn: '14d'});
    var emailContent = {
        from: process.env.emailUser,
        to: clientEmail,
        subject: "New Confirmation Email",
        text: `Here is the new confirmation email, it will also expire in 14 days:\n
        ${URLString}/emailVerify?ver=${token}`
    };

    transporter.sendMail(emailContent, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: ' + info.response);
        }
    });
}

// export async function orderConfirmation(clientEmail, products){

// }