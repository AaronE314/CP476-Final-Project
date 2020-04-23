import React from 'react'
import Layout from '../components/layout';
import Link from 'next/link'
import CartProduct from '../components/CartProduct';
import FlipMove from 'react-flip-move';
import { updateCart,updateWishList,getShoppingCart, getUserCart} from '../lib/userAuth';

export class Cart extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {
            numberOfItems: 8,
            total: 0,
            products: [

            ]
        }

        this.updateProduct = this.updateProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.getTotal = this.getTotal.bind(this);
    }

    async updateProduct(property, value, i) {

        

        let products = this.state.products;

        if (property === "quantity"){
            console.log("GOING INTO userAuth.js")
            await updateCart(products[i], value - products[i].quantity < 0, "single", value - products[i].quantity);
            
        }else if (property === "wishlisted"){
            await updateWishList(products[i]);
        }
        products[i][property] = value;

        this.setState({...this.state, products: products, total: this.getTotal(), numberOfItems: this.getItemsSold()});
    }

    async removeProduct(i) {

        

        let products = [...this.state.products];
        updateCart(products[i], true,"all"); 
        console.log("Removing all of the product");
        products.splice(i, 1);

        this.setState({...this.state, products: products, total: this.getTotal(), numberOfItems: this.getItemsSold()});
    }

    getSubTotal(product) {
        return (product.price * (1 - product.discount)) * product.quantity;
    }

    getTotal() {

        let total = 0;
        if (this.state.products !== undefined ){
            for (let i = 0; i < this.state.products.length; i++) {
                total += this.getSubTotal(this.state.products[i]);
            }
        }


        return total;
    }

    getItemsSold() {

        let items = 0;
        if (this.state.products !== undefined && this.state.products !== undefined){
            for (let i = 0; i < this.state.products.length; i++) {
                items += this.state.products[i].quantity;
            }
        }
        return items;
    }

    componentDidMount() {
        document.documentElement.style.setProperty("--showMore", 1);
        let cart =  getUserCart();
        console.log("cart",cart)
        this.setState({...this.state, products: cart});
    }
    cartEmpty(){
        console.log("EMPTY CART")
        return <h3>You currently have no items in your Cart.</h3>
    }
    render() {

        return <Layout fullPage={false}>

            <div className="mainContent">

                <h1>SHOPPING CART</h1>

                <div className="content">
                    <div className="cartItems">
                        <FlipMove typeName={null}>
                            {
                            (this.state.products.length !== 0)? 
                            this.state.products.map((product, i) => {
                                
                                return <CartProduct product={product} i={i} removeProduct={this.removeProduct} updateProduct={this.updateProduct} key={i}/>
                            }): this.cartEmpty()
                            }
                        </FlipMove>
                    </div>
                    <div className="summary">
                        <div className="summaryBox">
                            <h1>Order Summary</h1>
                            <div>
                                <label>Items sold</label>
                                <label className="right">{this.getItemsSold()}</label>
                            </div>
                            <div>
                                <label>Total</label>
                                <label className="right">{`CAD $${this.getTotal().toFixed(2)}`}</label>
                            </div>
                            <p>Taxes & Shipping calculated at next step</p>
                        </div>
                        <Link href="/checkout">
                            <button className="checkoutBtn">CHECKOUT</button>
                        </Link>
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
                    margin: 16px 138px;
                }

                .mainContent > h1 {
                    margin-top: 16px;
                }

                .cartItems { 
                    position: relative;
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
                    font-family: 'Open Sans';
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
                        grid-template-columns: 50% calc(50% - 96px);
                    }
                }

                @media only screen and (max-width: 1300px) {

                    .content {
                        grid-template-columns: 100%;
                        grid-template-areas:
                            "summary"
                            "products";
                    }

                    .cartItems {
                        grid-template-columns: 100%;
                    }

                    .mainContent {
                        width: calc(100% - (2 * 48px));
                        margin: 0 48px;
                    }

                    .checkoutBtn {
                        margin: 30px 0 30px 0;
                    }
                }

                @media only screen and (max-width: 992px) {

                    .mainContent {
                        width: calc(100% - (2 * 16px));
                        margin: 16px;
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

export default Cart;