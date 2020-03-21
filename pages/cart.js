import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link'
import CartProduct from '../components/CartProduct';
import FlipMove from 'react-flip-move';

export class Cart extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {
            numberOfItems: 8,
            total: 0,
            products: [
                {
                    productName: "Product Name",
                    quantity: 1,
                    price: 3.99,
                    discount: 0,
                    size: "S",
                    colour: "Black",
                    orderNumber: "0850318003",
                    imageLink: "",
                    wishlisted: true,
                },
                {
                    productName: "Product Name",
                    quantity: 1,
                    price: 3.99,
                    discount: 0.2,
                    size: "M",
                    colour: "Black",
                    orderNumber: "0850318004",
                    imageLink: "",
                    wishlisted: false,
                },
                {
                    productName: "Product Name",
                    quantity: 1,
                    price: 3.99,
                    discount: 0.4,
                    size: "XL",
                    colour: "Blue",
                    orderNumber: "0850318005",
                    imageLink: "",
                    wishlisted: false,
                },
            ]
        }

        this.updateProduct = this.updateProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    updateProduct(property, value, i) {

        //TODO: update db

        let products = this.state.products;

        products[i][property] = value;

        this.setState({...this.state, products: products});
    }

    removeProduct(i) {

        //TODO: update db

        let products = [...this.state.products];

        products.splice(i, 1);

        this.setState({...this.state, products: products});
    }

    render() {

        return <Layout>

            <div className="mainContent">

                <h1>SHOPPING CART</h1>

                <div className="content">
                    <div className="cartItems">
                        <FlipMove typeName={null}>
                            {this.state.products.map((product, i) => {
                                
                                return <CartProduct product={product} i={i} removeProduct={this.removeProduct} updateProduct={this.updateProduct} key={product.orderNumber}/>
                            })}
                        </FlipMove>
                    </div>
                    <div className="summary">
                        <div className="summaryBox">
                            <h1>Order Summary</h1>
                            <div>
                                <label>Items sold</label>
                                <label className="right">{this.state.numberOfItems}</label>
                            </div>
                            <div>
                                <label>Total</label>
                                <label className="right">{`CAD $${this.state.total.toFixed(2)}`}</label>
                            </div>
                            <p>Taxes & Shipping calculated at next step</p>
                        </div>
                        <button className="checkoutBtn">CHECKOUT</button>
                        <p>Read more about how to return an item <a href="#">here</a></p>
                        <p>Standard home delivery CAD $20 / Delivery in 5-7 business days<br/>
                        Free delivery on orders over CAD $200 before shipping & taxes</p>
                    </div>
                </div>

            </div>

            <style jsx>{`
            
                .content {
                    display: grid;
                    grid-template-columns: 70% calc(30% - 96px);
                    grid-template-areas:
                        "products summary";
                    grid-column-gap: 96px;
                }

                .summaryBox {
                    border: 0.5px solid black;
                    padding: 16px;
                }

                .summaryBox h1 {
                    margin-bottom: 26px;
                }

                .summaryBox div {
                    margin-bottom: 10px;
                }

                .summaryBox p {
                    margin-bottom: 16px;
                }

                .mainContent {
                    width: calc(100% - (2 * 138px));
                    margin: 0 138px;
                }

                .cartItems { 
                    grid-area: products;
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(578px, 1fr));
                    grid-column-gap: 16px;
                }

                .summary { 
                    grid-area: summary;
                }

                .right {
                    float: right;
                }

                .summary p, .summary p a {
                    font-family: Open Sans;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                }

                .summary p a {
                    text-decoration: underline;
                }

                .checkoutBtn {

                    border: none;

                    width: 100%;
                    height: 48px;

                    margin: 30px 8px 30px 0;
                    padding: 0;

                    background: var(--highlightColor);

                    position: relative;

                }

                .checkoutBtn:hover {
                    filter: brightness(95%);
                    cursor: pointer;
                }

                @media only screen and (max-width: 1940px) {
                    .content {
                        grid-template-columns: 50% 50%;
                    }
                }

                @media only screen and (max-width: 1300px) {

                    .content {
                        grid-template-columns: 100%;
                        grid-template-areas:
                            "summary"
                            "products";
                    }

                    .mainContent {
                        width: calc(100% - (2 * 48px));
                        margin: 0 48px;
                    }
                }

                @media only screen and (max-width: 992px) {

                    .mainContent {
                        width: 100%;
                        margin: 0;
                    }
                }
            
            `}</style>

        </Layout>

    }

}

export default Cart;