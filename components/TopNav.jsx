
import React from 'react';
import styles from "../css/TopNav.module.css";

import Dialog from './Dialog';
import { Overlay } from './Overlay';

export class TopNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signupShown: false,
            hover: false,
            hoveredIndex: -1
        };

        this.showSignUp = this.showSignUp.bind(this);
        this.hideSignUp = this.hideSignUp.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
    }

    mouseOver(i) {

        let nodes = document.getElementById("CategoriesNav").childNodes;

        let offset = 0;

        for (let j = 0; j < nodes.length && j < i; j++) {
            offset += nodes[j].offsetWidth;
        }

        this.setState({...this.state, hover: true, hoveredIndex: offset});
    }

    mouseOut() {
        console.log("out");
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

                <nav id="CategoriesNav" className={styles.catagories}>
                    <a className={styles.clickableText} 
                    onMouseEnter={() => {this.mouseOver(0)}}><span>MEN</span></a>
                    <a className={styles.clickableText}
                    onMouseEnter={() => {this.mouseOver(1)}}><span>WOMEN</span></a>
                    <a className={styles.clickableText}
                    onMouseEnter={() => {this.mouseOver(2)}}><span>KIDS</span></a>
                    <a className={styles.clickableText}
                    onMouseEnter={() => {this.mouseOver(3)}}><span>HOME</span></a>
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
            {(this.state.hover) ? <Overlay offset={this.state.hoveredIndex}></Overlay>: null}
        </div>;

    }

}

export default TopNav;