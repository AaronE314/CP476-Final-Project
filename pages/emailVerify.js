import React from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import { verifyEmail } from "../lib/apiRequester";
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
            const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhYmE5OTkwQG15bGF1cmllci5jYSIsImlhdCI6MTU4Nzc0NzQ2MSwiZXhwIjoxNTg4MzUyMjYxfQ.tbuN_vqPUjaIpepbzwXYufNlqI-K1nJPEushca7XPb0";
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
                    //
                } else {
                    //
                }
            });
        }
        catch(err){
            console.log(err);
        }
        

    }

    render(){
        
        
        //document.location.href="/";
        //Router.push(`/`); // Redirect after finishing
        return <Layout><div>We are currently verifying your account.</div></Layout>
    }
}

export default withRouter(EmailVerify);