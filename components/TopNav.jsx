
import React from 'react';
import styles from "../css/TopNav.module.css";


export class TopNav extends React.Component {

    render() {

    return <div className={styles.topNav}>

            <div className={styles.logo}>
                <img id="logo" src="/images/tempLogo.svg"></img>
            </div>

            <nav className={styles.catagories}>
                <a>MEN</a>
                <a>WOMEN</a>
                <a>KIDS</a>
                <a>HOME</a>
            </nav>

            <div className={styles.right}>
                <div className={styles.search}>
                    <img src="/images/search.svg" id="search"></img>
                    <input placeholder="Search"></input>
                </div>
                
                <a className="signIn">
                    <img src="/images/user.svg" width="16px" height="16px" id="userImage"></img>
                    SIGN IN
                </a>

                <a className="wishlist">
                    <img src="/images/heart.svg" id="heart"></img>
                    WISHLIST
                </a>

                <a className="cart">
                    <img src="/images/cart.svg" id="cart"></img>
                    CART
                </a>
            </div>

        </div>;

    }

}

export default TopNav;