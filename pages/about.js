import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Order from '../components/Order';
import { getUser } from '../lib/userAuth';
import Router from 'next/router';
import {getOrders, checkToken} from "../lib/apiRequester"
import { URLString } from '../constants';
const Orders = ({orders}) => {

    // const [orders, setOrders] = useState();



    return <Layout fullPage={false}>
        
    </Layout>

};



export default Orders;