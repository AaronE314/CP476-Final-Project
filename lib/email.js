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

export async function sendVerification(clientEmail){

    const token = jwt.sign({username:clientEmail}, process.env.jwtSecret,{expiresIn: '7d'});
    var emailContent = {
        from: process.env.emailUser,
        to: clientEmail,
        subject: "Confirmation Email",
        text: `Thank you for creating an account with us.\n
        Please verify your email by clicking the link below:\n
        ${URLString}/emailVerify?ver=${token}` //Change URL when it's set up on a domain
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