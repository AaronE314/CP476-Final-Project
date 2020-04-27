import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
const Privacy = () => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        <div>
            <h1>Privacy Policy</h1>
            <h2>User Data</h2>
            <p>We don't store any user data without encoding and hashing.</p>
            <h2>Cookies</h2>
            <p>This store uses cookies to keep track of product data and track sign-ins.</p>
        </div>
        

        <style jsx>{`
            h1 {
                text-transform: uppercase;
                margin-bottom: 32px;
                line-height: 1em;
            }
            h2 {
                font-family: "Open Sans";
                letter-spacing: 0;
            }
            p {
                font-family: "Open Sans";
                font-weight: normal;
                letter-spacing: 0;
            }

            div {
                margin: 0 192px;
            }

            @media only screen and (max-width: 1000px) {
                
                div {
                    margin: 0 120px;
                }

            }

            @media only screen and (max-width: 610px) {

                div {
                    margin: 45px 16px 0 16px;
                }

            }

        `}</style>

    </Layout>

};


export default Privacy;