import React from 'react';
import styles from "../css/CartProduct.module.css";

export class CartProduct extends React.Component{
    render(){
        return <div className={styles.CartProduct}>
            <img className={styles.CartImage} src=""></img>
            
            <div className={styles.CartInfo}>
                <p>Product Name</p>
                <p>$3.99</p>
                <table className={styles.CartSpecs}>
                    <tr>
                        <td>Item no:</td>
                        <td>0850318003</td>
                    </tr>
                    <tr>
                        <td>Colour:</td>
                        <td>Black</td>
                    </tr>
                    <tr>
                        <td>Size:</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>Subtotal:</td>
                        <tb>$3.99</tb>
                    </tr>
                </table>
                <div className={styles.CartWishQuantity}>
                    <img className={styles.CartWishlist} src="/images/heart.svg"></img>
                    <div className={styles.CartQuantity}>
                        <img className={styles.CartMinus} src="/images/minus.svg"></img>
                        <p>1</p>
                        <img className={styles.CartPlus} src="/images/plus.svg"></img>
                    </div>
                </div>
            </div>

            <img className={styles.CartRemove} src="/images/remove.svg"></img>
        </div>
    }
}

export default CartProduct;