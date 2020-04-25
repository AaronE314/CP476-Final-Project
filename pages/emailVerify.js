import React from 'react'
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import { verifyEmail } from "../lib/apiRequester";
import Router from 'next/router';

export class EmailVerify extends React.Component {

    async componentDidMount(){
        try{
            //Gets the token string from the URL
            const urlQuery = new URLSearchParams(window.location.search);
            let token = urlQuery.get("ver");

            //Passes the token in a post request to verify it and update the database
            verifyEmail(token)
            .then((data) => {
                console.log(data);
                if (data.status === "ok") {
                    //Tells the user that their email was verified, and that it should redirect the user to the main page
                    document.getElementById("info").innerHTML = "Your email has now been verified, we are re-directing you to the main page.<br>If nothing happens after 15 seconds, you can just close the tab."
                    Router.push(`/`); // Redirect to main page after finishing
                } else if (data-status === "TokenExpired") {
                    //Tells the user that their verification email expired, and that a new one was sent to them
                    document.getElementById("info").innerHTML = "This link has expired, a new one has been sent to you.";
                } else {
                    //Notifies the user that an unexpected error has occured with their verification
                    document.getElementById("info").innerHTML = "An unexpected error has occurred, please try again later.";   
                }
            });
        }
        catch(err){
            //Notifies the user that an unexpected error has occured with their verification
            console.log(err);
            document.getElementById("info").innerHTML = "An unexpected error has occurred, please try again later.";
        }
    }

    render(){
        // Text to notify the user that their email is being verified in case it takes a while.
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