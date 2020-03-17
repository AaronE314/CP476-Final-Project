
import React from 'react';
import styles from "../css/TopNav.module.css";

import Dialog from './Dialog';
import { Overlay } from './Overlay';

export class TopNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signupShown: false,
            hover: false
        };

        this.showSignUp = this.showSignUp.bind(this);
        this.hideSignUp = this.hideSignUp.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
    }

    mouseOver() {
        this.setState({...this.state, hover: true});
    }

    mouseOut() {
        this.setState({...this.state, hover: false});
    }

    showSignUp() {
        this.setState({...this.state, signupShown: true});
    }

    hideSignUp() {
        this.setState({...this.state, signupShown: false});
    }

    render() {

    return <div className={styles.topNavContainer} onMouseLeave={this.mouseOut}>
        <div className={styles.topNav}>

                <div className={styles.logo}>
                    <img id="logo" src="/images/tempLogo.svg"></img>
                </div>

                <nav className={styles.catagories}>
                    <a className={styles.clickableText} 
                    onMouseEnter={this.mouseOver}><span>MEN</span></a>
                    <a className={styles.clickableText}><span>WOMEN</span></a>
                    <a className={styles.clickableText}><span>KIDS</span></a>
                    <a className={styles.clickableText}><span>HOME</span></a>
                </nav>

                <div className={styles.right}>
                    <div className={styles.search}>
                        <img src="/images/search.svg" id="search"></img>
                        <input placeholder="Search"></input>
                    </div>
                    
                    <a onClick={this.showSignUp} className={styles.clickableText}>
                        <img src="/images/user.svg" width="16px" height="16px" id="userImage"></img>
                        <span>SIGN IN</span>
                    </a>

                    <a className={styles.clickableText}>
                        <img src="/images/heart.svg" id="heart"></img>
                        <span>WISHLIST</span>
                    </a>

                    <a className={styles.clickableText}>
                        <img src="/images/cart.svg" id="cart"></img>
                        <span>CART</span>
                    </a>
                </div>
                
                {(this.state.signupShown) ? <Dialog close={this.hideSignUp}></Dialog> : null}
            </div>
            {(this.state.hover) ? <Overlay></Overlay>: null}
        </div>;

    }

}

export default TopNav;