import React from 'react';
import styles from "../css/CartProduct.module.css";
import {isProductWishlisted} from "../lib/utils"

/**
 * Defines the component for the look and functionality of a cart product
 * 
 * @author Aaron Exley
 * @author Chris Labatt
 */
export class CartProduct extends React.Component {

    /**
     * 
     * @param {*} props a product
     */
    constructor(props){
        super(props);

        this.state = {
            highlightColor: "",
        };
        this.getSubtotal = this.getSubtotal.bind(this);
        this.getAdjustedPrice = this.getAdjustedPrice.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.updateWishlist = this.updateWishlist.bind(this);
        this.increaseRef = React.createRef(); 
        this.decreaseRef = React.createRef();
    }

    /**
     * Calulates the subTotal
     */
    getSubtotal(){
        if(this.props.product.discount == 0){
            return Math.round((this.props.product.price * this.props.product.quantity) * 100) / 100;
        }
        else{
            return Math.round((this.getAdjustedPrice() * this.props.product.quantity) * 100) / 100;
        }
    }

    /**
     * Calculates the sale price for the product
     */
    getAdjustedPrice(){
        return Math.round((this.props.product.price * (1 - this.props.product.discount)) * 100) / 100
    }

    /**
     * Decreases the quantity.
     */
    async decreaseQuantity(){
        if (this.props.product.quantity > 1){
            // this.setState({...this.state, quantity: this.props.product.quantity - 1});
            this.increaseRef.current.setAttribute("disabled",true);
            this.decreaseRef.current.setAttribute("disabled",true);
            this.props.updateProduct("quantity", this.props.product.quantity - 1, this.props.i).then(() => {
                this.increaseRef.current.removeAttribute("disabled");
                this.decreaseRef.current.removeAttribute("disabled");
            });
        }
    }

    /**
     * Increase the quantity.
     */
    async increaseQuantity(){

        this.increaseRef.current.setAttribute("disabled",true);
        this.decreaseRef.current.setAttribute("disabled",true);
        this.props.updateProduct("quantity", this.props.product.quantity + 1, this.props.i).then(() => {
            this.increaseRef.current.removeAttribute("disabled");
            this.decreaseRef.current.removeAttribute("disabled");     
        });
        
    }

    /**
     * Updates the wishlist
     */
    updateWishlist(){
        this.props.updateProduct("wishlisted", !this.props.product.wishlisted, this.props.i);
    }

    /**
     * Removes itself from the list of its parent
     */
    removeProduct(){
        //Removes product
        this.props.removeProduct(this.props.i);
    }

    /**
     * Renders the component
     */
    render(){
        
        let highlightColor = "#FFF500";
        if (typeof window !== 'undefined') {
            highlightColor = window.getComputedStyle(document.documentElement).getPropertyValue('--highlightColor');
        }

        return <div className={styles.CartProduct}>
            <img className={styles.CartImage} src={`data:image/png;base64,${this.props.product.image}`}></img>
            
            <div className={styles.CartInfo}>
                <p>{this.props.product.productName}</p>

                {(this.props.product.discount > 0) ? <p className={styles.CartDiscount} style={{background: highlightColor}}>${this.getAdjustedPrice()}</p> : null}
                {(this.props.product.discount > 0) ? <p className={styles.CartOldPrice}>${this.props.product.price.toFixed(2)}</p> : <p>${this.props.product.price.toFixed(2)}</p>}
                <table className={styles.CartSpecs}>
                    <tbody>
                        <tr>
                            <td>Item no:</td>
                            <td>{this.props.product.productID}</td>
                        </tr>
                        <tr>
                            <td>Colour:</td>
                            <td>{this.props.product.colours.name}</td>
                        </tr>
                        <tr>
                            <td>Size:</td>
                            <td>{this.props.product.size}</td>
                        </tr>
                        <tr>
                            <td>Subtotal:</td>
                            <td>${(this.getAdjustedPrice() * this.props.product.quantity).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.CartWishQuantity}>
                    <img onClick={this.updateWishlist} className={styles.CartWishlist} src="/images/heart.svg"></img>
                    {(this.props.product.wishlisted || isProductWishlisted(this.props.product)) ? 
                        <svg className={styles.CartWishlistInner} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.95 0C14.036 0 12.199 0.882834 11 2.27793C9.80099 0.882834 7.96399 0 6.04999 0C2.66199 0 -1.37687e-05 2.6376 -1.37687e-05 5.99455C-1.37687e-05 10.1144 3.73999 13.4714 9.40499 18.5722L11 20L12.595 18.5613C18.26 13.4714 22 10.1144 22 5.99455C22 2.6376 19.338 0 15.95 0Z" fill={highlightColor}/>
                        </svg> : null
                    }

                    <div className={styles.CartQuantity}>
                        <div className={styles.container}>
                            <img className={(this.props.product.quantity > 1) ? styles.CartMinus : styles.CartMinusDisabled} src="/images/minus.svg"/>
                        <button className={styles.btn }ref = {this.decreaseRef}onClick={this.decreaseQuantity} ></button>
                        </div>
                         
                        
                        
                        <p>{this.props.product.quantity}</p>
                        <div className={styles.container}>
                            <img  className ={styles.topMargin}src="/images/plus.svg"  ></img>
                        <button className={styles.btn} ref ={this.increaseRef} onClick={ this.increaseQuantity}>
                            
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <img onClick={this.removeProduct} className={styles.CartRemove} src="/images/remove.svg"></img>
        </div>
    }
}

export default CartProduct;