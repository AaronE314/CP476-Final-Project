import React from 'react';
import styles from "../css/CartProduct.module.css";

export class CartProduct extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            productName: "Product Name",
            quantity: 1,
            price: 3.99,
            discount: 0.2,
            size: "S",
            colour: "Black",
            orderNumber: "0850318003",
            imageLink: "",
            wishlisted: false,
            highlightColor: ""
        };
        this.getSubtotal = this.getSubtotal.bind(this);
        this.getAdjustedPrice = this.getAdjustedPrice.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.updateWishlist = this.updateWishlist.bind(this);
    }

    getSubtotal(){
        if(this.state.discount == 0){
            return Math.round((this.state.price * this.state.quantity) * 100) / 100;
        }
        else{
            return Math.round((this.getAdjustedPrice() * this.state.quantity) * 100) / 100;
        }
    }

    getAdjustedPrice(){
        return Math.round((this.state.price * (1 - this.state.discount)) * 100) / 100
    }

    decreaseQuantity(){
        if (this.state.quantity > 1){
            this.setState({...this.state, quantity: this.state.quantity - 1});
        }
    }

    increaseQuantity(){
        this.setState({...this.state, quantity: this.state.quantity + 1});
    }

    updateWishlist(){
        this.setState({...this.state, wishlisted: !this.state.wishlisted});
    }

    removeProduct(){
        //Removes product
    }

    render(){
        this.state.highlightColor = getComputedStyle(document.documentElement).getPropertyValue('--highlightColor');
        return <div className={styles.CartProduct}>
            <img className={styles.CartImage} src={this.state.imageLink}></img>
            
            <div className={styles.CartInfo}>
                <p>{this.state.productName}</p>

                {(this.state.discount > 0) ? <p className={styles.CartDiscount} style={{background: this.state.highlightColor}}>${this.getAdjustedPrice()}</p> : null}
                {(this.state.discount > 0) ? <p className={styles.CartOldPrice}>${this.state.price.toFixed(2)}</p> : <p>${this.state.price.toFixed(2)}</p>}
                <table className={styles.CartSpecs}>
                    <tr>
                        <td>Item no:</td>
                        <td>{this.state.orderNumber}</td>
                    </tr>
                    <tr>
                        <td>Colour:</td>
                        <td>{this.state.colour}</td>
                    </tr>
                    <tr>
                        <td>Size:</td>
                        <td>{this.state.size}</td>
                    </tr>
                    <tr>
                        <td>Subtotal:</td>
                        <tb>${this.getSubtotal().toFixed(2)}</tb>
                    </tr>
                </table>
                <div className={styles.CartWishQuantity}>
                    <img onClick={this.updateWishlist} className={styles.CartWishlist} src="/images/heart.svg"></img>
                    {(this.state.wishlisted) ? 
                        <svg className={styles.CartWishlistInner} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.95 0C14.036 0 12.199 0.882834 11 2.27793C9.80099 0.882834 7.96399 0 6.04999 0C2.66199 0 -1.37687e-05 2.6376 -1.37687e-05 5.99455C-1.37687e-05 10.1144 3.73999 13.4714 9.40499 18.5722L11 20L12.595 18.5613C18.26 13.4714 22 10.1144 22 5.99455C22 2.6376 19.338 0 15.95 0Z" fill={this.state.highlightColor}/>
                        </svg> : null
                    }

                    <div className={styles.CartQuantity}>
                        <img onClick={this.decreaseQuantity} className={(this.state.quantity > 1) ? styles.CartMinus : styles.CartMinusDisabled} src="/images/minus.svg"></img>
                        <p>{this.state.quantity}</p>
                        <img onClick={this.increaseQuantity} src="/images/plus.svg"></img>
                    </div>
                </div>
            </div>

            <img onClick={this.removeProduct} className={styles.CartRemove} src="/images/remove.svg"></img>
        </div>
    }
}

export default CartProduct;