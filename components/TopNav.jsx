
import React from 'react';
import styles from "../css/TopNav.module.css";


export class TopNav extends React.Component {

    render() {

    return <div className={styles.topNav}>

            <img className={styles.logo} id="logo" src="logo.png"></img>

            <nav className={styles.catagories}>
                <a>MEN</a>
                <a>WOMEN</a>
                <a>KIDS</a>
                <a>HOME</a>
            </nav>

            <div className={styles.right}>
                <div className="search">
                    <img id="search" src="search.png"></img>
                    <input placeholder="Search"></input>
                </div>
                
                <a className="signIn">
                    <img id="userImage"></img>
                    SIGN IN
                </a>

                <a className="wishlist">
                    <img id="heart"></img>
                    WISHLIST
                </a>

                <a className="cart">
                    <img id="cart"></img>
                    CART
                </a>
            </div>

        </div>;

    }

}

export default TopNav;