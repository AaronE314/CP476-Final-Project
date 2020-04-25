import React from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import { verifyEmail } from "../lib/apiRequester";
import Router from 'next/router';
const jwt = require('jsonwebtoken');
//require('dotenv').config();
//need to fix this
const jwtSecret ='SomeSecretValue'

export class EmailVerify extends React.Component {
    
    async componentDidMount(){
        try{
            const { router } = this.props;

            let token = router.query.verifyEmail;
            console.log(token);
            //it feels like it's loading too quickly to get the url queries
            //temporarily hardcoding with the token that I know exists.
            const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhYmE5OTkwQG15bGF1cmllci5jYSIsImlhdCI6MTU4Nzg0MjI0MywiZXhwIjoxNTg5MDUxODQzfQ.ghyGUjdVU2fnYniE-1y6ixX3fSRwKieeqR4_LoT7tTI";
            const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhYmE5OTkwQG15bGF1cmllci5jYSIsImlhdCI6MTU4Nzc0NzQ2MSwiZXhwIjoxNTg3NzUyMjYxfQ.VN8piKdJeLw8Tn2LxU3BVLWOSD_7dEImH_8Sv4sSPw8";
            // console.log(token);
            // console.log(this.props);
            // console.log(this.props.router);
            // console.log(this.props.router.query);
            // Have verify in try catch as it errors if false
            //const decodedToken = jwt.verify(expiredToken, jwtSecret);
            //console.log(decodedToken);
            verifyEmail(token2)
            .then((data) => {
                console.log(data);
                if (data.status === "ok") {
                    //Email was verified, so it should redirect the user to the main page?
                    document.getElementById("info").innerHTML = "Your email has now been verified, we are re-directing you to the main page.<br>If nothing happens after 15 seconds, you can just close the tab."
                    Router.push(`/`); // Redirect after finishing
                } else if (data-status === "TokenExpired") {
                    //Verification Email has expired, send a new one
                    document.getElementById("info").innerHTML = "This link has expired, a new one has been sent to you.";
                } else {
                    //Unexpected error
                    document.getElementById("info").innerHTML = "An unexpected error has occurred, please try again later.";   
                }
            });
        }
        catch(err){
            console.log(err);
            document.getElementById("info").innerHTML = "An unexpected error has occurred, please try again later.";
        }
    }

    render(){
        
        
        //document.location.href="/";
        
        return <Layout><div className = 'mainContent' id = 'info'>We are currently verifying your account.</div>
        
        <style jsx>{`
            .mainContent {
                margin-left: 32px;
            }
        `}</style>
        </Layout>
    }
}

export default withRouter(EmailVerify);