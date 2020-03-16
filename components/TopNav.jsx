
import React from 'react';
import styles from "../css/TopNav.module.css";

import Dialog from './Dialog';

export class TopNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signupShown: false
        };

        this.showSignUp = this.showSignUp.bind(this);
        this.hideSignUp = this.hideSignUp.bind(this);
    }

    showSignUp() {
        this.setState({...this.state, signupShown: true});
    }

    hideSignUp() {
        this.setState({...this.state, signupShown: false});
    }

    render() {

    return <div className={styles.topNav}>

            <div className={styles.logo}>
                <img id="logo" src="/images/tempLogo.svg"></img>
            </div>

            <nav className={styles.catagories}>
                <a className={styles.clickableText}>MEN</a>
                <a className={styles.clickableText}>WOMEN</a>
                <a className={styles.clickableText}>KIDS</a>
                <a className={styles.clickableText}>HOME</a>
            </nav>

            <div className={styles.right}>
                <div className={styles.search}>
                    <img src="/images/search.svg" id="search"></img>
                    <input placeholder="Search"></input>
                </div>
                
                <a onClick={this.showSignUp} className={styles.clickableText}>
                    <img src="/images/user.svg" width="16px" height="16px" id="userImage"></img>
                    SIGN IN
                </a>

                <a className={styles.clickableText}>
                    <img src="/images/heart.svg" id="heart"></img>
                    WISHLIST
                </a>

                <a className={styles.clickableText}>
                    <img src="/images/cart.svg" id="cart"></img>
                    CART
                </a>
            </div>
            {(this.state.signupShown) ? <Dialog close={this.hideSignUp}></Dialog> : null}
        </div>;

    }

}

export default TopNav;