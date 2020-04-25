import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Order from '../components/order';
import { isSignedIn } from '../lib/userAuth';
import Router from 'next/router';
import {getOrders} from "../lib/apiRequester"
const Orders = ({orders}) => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        
        <div className="orders">
            {orders.map((order, i) => {
                
                return <Order order={order} key={i}/>
            })}
        </div>
        

        <style jsx>{`

            .orders {
                margin: 0 192px;
            }

            @media only screen and (max-width: 1000px) {
                
                .orders {
                    margin: 0 120px;
                }

            }

            @media only screen and (max-width: 610px) {

                .orders {
                    margin: 45px 25px 0 25px;
                }

            }

        `}</style>

    </Layout>

};

Orders.getInitialProps = async (ctx) => {

    if (await isSignedIn()) {

        let orders = await getOrders();
        
        return {
            orders: orders};
    } else {
        if (ctx.res) {
            ctx.res.writeHead(302, {
                Location: "/",
                'Content-Type': 'text/html; charset=utf-8',
            });
            ctx.res.end();
        } else {
            Router.push("/");
        }
    }

    return {};

}




export default Orders;