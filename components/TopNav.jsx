
import React from 'react';
import styles from "../css/TopNav.module.css";
import Link from 'next/link';
import Dialog from './Dialog';
import { Overlay } from './Overlay';

export class TopNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signupShown: false,
            hover: false,
            hoveredIndex: -1,
            menuOpen: false,
            shiftMenu: false,

            categories: [
                "MEN",
                "WOMEN",
                "KIDS",
                "HOME"
            ],
            category: null
        };

        this.showSignUp = this.showSignUp.bind(this);
        this.hideSignUp = this.hideSignUp.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.focusId = this.focusId.bind(this);
    }

    mouseOver(i) {

        let offset = 0;

        if (this.state.shiftMenu) {
            let nodes = document.getElementById("CategoriesNav").childNodes;
    
            for (let j = 0; j < nodes.length && j < i; j++) {
                offset += nodes[j].offsetWidth;
            }
        }

        this.setState({...this.state, hover: true, hoveredIndex: offset, menuOpen: false, category: this.state.categories[i]});
    }

    mouseOut() {
        this.setState({...this.state, hover: false, category: null});
    }

    showSignUp() {
        this.setState({...this.state, signupShown: true, menuOpen: false, hover:false, category: null});
    }

    hideSignUp() {
        this.setState({...this.state, signupShown: false});
    }

    toggleMenu() {
        this.setState({...this.state, menuOpen: !this.state.menuOpen, hover:false, category: null})
    }

    focusId(id) {
        this.setState({...this.state, menuOpen: false, hover:false, category: null})
        let element = document.getElementById(id);
        console.log(element);
        if (element) {
            element.focus();
        }
    }

    render() {

        return <div className={styles.topNavContainer} onMouseLeave={this.mouseOut}>
            <div className={styles.topNav}>

                    <div className={styles.logo}>
                        <Link href="/"><img id="logo" src="/images/tempLogo.svg"></img></Link>
                    </div>
                    
                    <nav id="CategoriesNav" className={styles.catagories}>
                        {this.state.categories.map((item, i) => {
                        return <a key={i} className={styles.clickableText} 
                        onMouseEnter={() => {this.mouseOver(i)}}><span>{item}</span></a>
                        })}
                    </nav>

                    <div className={styles.right}>
                        <div className={styles.search}>
                            <img onClick={() => {this.focusId("search")}} src="/images/search.svg" htmlFor="search" id="searchImg"></img>
                            <input id="search" placeholder="Search"></input>
                        </div>
                        
                        <div onClick={this.toggleMenu} className={`${styles.hamburger} ${(this.state.menuOpen) ? styles.open : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`${styles.rightButtons} ${(this.state.menuOpen) ? styles.open : ""}`}>
                            <a onClick={this.showSignUp} className={styles.clickableText}>
                                <img src="/images/user.svg" width="16px" height="16px" id="userImage"></img>
                                <span>SIGN IN</span>
                            </a>

                            <a className={styles.clickableText}>
                                <img src="/images/heart.svg" id="heart"></img>
                                <Link href="/wishlist"><span>WISHLIST</span></Link>
                            </a>

                            <a className={styles.clickableText}>
                                <img src="/images/cart.svg" id="cart"></img>
                                <span>CART</span>
                            </a>
                        </div>

                    </div>
                    
                    {(this.state.signupShown) ? <Dialog close={this.hideSignUp}></Dialog> : null}
                </div>
                {(this.state.hover) ? <Overlay category={this.state.category} offset={this.state.hoveredIndex}></Overlay>: null}
            </div>;

        }

}

export default TopNav;