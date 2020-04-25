import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link'
import CheckoutProduct from '../components/CheckoutProduct';
import ReactToPrint from 'react-to-print';
import { withRouter } from 'next/router';
import {  getUserCart} from '../lib/userAuth';
export class Confirmation extends React.Component {

    constructor(props) {
        super(props);        

        this.state = {
            numberOfItems: 8,
            total: 0,
            value: 0,
            shipping: 0,
            tax: 0,
            orderNumber: "W0227201998042392",
            products: [
                
            ]
        }

        this.getTotal = this.getTotal.bind(this);
    }

    getSubTotal(product) {
        return (product.price * (1 - product.discount)) * product.quantity;
    }

    getTotal(cart) {

        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            total += this.getSubTotal(cart[i]);
        }

        return total;
    }

    componentDidMount() {

        let { router } = this.props;

        let cart =  getUserCart();
        let value = this.getTotal(cart);

        let shipping = (value > 200) ? 0 : 20;

        let tax = value * 0.13;

        let total = value + shipping + tax;
        let num = 0; 
        cart.forEach((item)=>{
            num += item.quantity
        });
        this.setState({...this.state, total: total.toFixed(2), 
                                      value: value.toFixed(2), 
                                      tax: tax.toFixed(2), 
                                      shipping: shipping.toFixed(2),
                                      orderNumber: router.query.orderNumber,products: (cart) ? cart : [], numberOfItems:num})
    }

    render() {

        return <Layout fullPage={false}>

            <div className="mainContent">

                <h1>YOUR ORDER IS ON ITS WAY</h1>

                <div className="content" ref={el => (this.componentRef = el)}>
                    <div className="cartItems">
                        {this.state.products.map((product, i) => {
                            
                            return <CheckoutProduct product={product} key={i}/>
                        })}
                        <div className="subTotals">
                            <div className="value">
                                <label>Order value</label>
                                <label className="right">{`CAD $${this.state.value}`}</label>
                            </div>
                            <div className="value">
                                <label>Shipping</label>
                                <label className="right">{`CAD $${this.state.shipping}`}</label>
                            </div>
                            <div className="value">
                                <label>Tax</label>
                                <label className="right">{`CAD $${this.state.tax}`}</label>
                            </div>
                        </div>
                        <div className="total">
                            <label>Total</label>
                            <label className="right">{`CAD $${this.state.total}`}</label>
                        </div>
                    </div>
                    <div className="thankYou">
                        
                        <h1>Thank You!</h1>
                        
                        <p className="orderNumber">Your confirmation number is: <b>{this.state.orderNumber}</b></p>

                        <p>Your order will arrive within 5-7 business days. If you have any questions, please don’t hesitate to reach out to our customer service.</p>

                        <p>All this information will be emailed to you shortly</p>

                        <div className="buttons">
                            <Link href="/"><button className="backBtn">BACK TO SHOP</button></Link>
                            <ReactToPrint
                                trigger={() => {
                                    return <button className="printBtn">
                                    <div>
                                        <img src="/images/print.svg"/>
                                    </div>
                                    <span>PRINT RECEIPT</span>
                                </button>
                                }}
                                content = {() => this.componentRef}
                            />
                            </div>
                        
                    </div>
                </div>

            </div>

            <style jsx>{`
            
                .content {
                    display: grid;
                    grid-template-columns: 50% calc(50% - 98px);
                    grid-template-areas:
                        "products shipping";
                    grid-column-gap: 96px;
                }

                .thankYou {
                    grid-area: shipping;
                }

                .thankYou > h1 {
                    font-weight: normal;
                    font-size: 32px;
                    line-height: 37px;
                }

                .thankYou > p, .thankYou > p a{
                    font-family: "Open Sans";
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 19px;
                }

                .thankYou > p a {
                    text-decoration: underline;
                }

                .subTotals {
                    margin-top: 24px;
                }

                .subTotals * {
                    font-family: "Open Sans";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 24px;
                }

                .mainContent {
                    width: calc(100% - (2 * 138px));
                    margin: 16px 138px 96px 138px;
                }

                .mainContent > h1 {
                    margin-top: 16px;
                }

                .cartItems { 
                    grid-area: products;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(578px, 1fr));
                    grid-column-gap: 16px;
                }

                .right {
                    float: right;
                }

                .total {
                    margin-top: 24px;
                }

                .backBtn {

                    border: none;

                    width: 60%;
                    height: 48px;

                    margin: 30px 8px 30px 0;
                    padding: 0;

                    background: var(--highlightColor);

                    position: relative;

                }

                .backBtn:hover {
                    filter: brightness(95%);
                    cursor: pointer;
                }

                .printBtn {
                    position: relative;
                    width: calc(40% - 8px);
                    background: white;
                    border: 0.5px solid Black;
                    height: 48px;
                    margin: 30px 8px 30px 0;
                }

                .printBtn div {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 47px;
                    height: 47px;
                    background: black;
                }

                .printBtn span {
                    margin-left: 45px;
                }

                .printBtn div img {
                    position: absolute;
                    top: 12px;
                    left: 21%;
                }

                .printBtn:hover {
                    filter: brightness(95%);
                    cursor: pointer;
                }
                
                .buttons {
                    display: flex;
                }
                @media only screen and (max-width: 1430px) {

                    .backBtn {
                        width: 80%
                    }

                    .printBtn {
                        width: 48px;
                        height: 48px;
                    }
                    
                    .printBtn span {
                        display: none;
                    }
                }

                @media only screen and (max-width: 1250px) {

                    .backBtn {
                        width: 60%;
                    }

                    .printBtn {
                        width: calc(40% - 8px);;
                        height: 48px;
                    }
                    
                    .printBtn span {
                        display: block;
                    }

                    .content {
                        grid-template-columns: 100%;
                        grid-template-areas:
                            "products"
                            "shipping";
                    }

                    .mainContent {
                        width: calc(100% - (2 * 48px));
                        margin: 0 48px;
                    }
                }

                @media only screen and (max-width: 992px) {

                    .mainContent {
                        width: calc(100% - (2 * 16px));
                        margin: 0 16px;
                    }

                    .mainContent > h1 {
                        line-height: 37px;
                    }

                    .cartItems {
                        grid-template-columns: 100%;
                    }

                    .formInputs {
                        grid-template: 100%;
                        grid-gap: 16px;
                    }
                }

                @media only screen and (max-width: 700px) {
                    
                    .backBtn {
                        width: 85%;
                    }

                    .printBtn {
                        width: 48px;
                        height: 48px;
                    }
                    
                    .printBtn span {
                        display: none;
                    }
                }

                @media only screen and (max-width: 610px) {

                    .mainContent {
                        margin: 76px 16px 0 16px;
                    }

                }
            
            `}</style>

        </Layout>

    }

} 

export default withRouter(Confirmation);