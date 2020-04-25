
import React from 'react';
import styles from "../css/TopNav.module.css";
import Link from 'next/link';
import Dialog from './Dialog';
import { Overlay } from './Overlay';
import { escape } from 'validator';
import { getUserEmailName, isSignedIn, getNumberOfItemsInCart, setUser, initUser } from '../lib/userAuth'
import { signOut } from '../lib/apiRequester'
import Router from 'next/router';

export class TopNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signupShown: false,
            hover: false,
            hoveredIndex: -1,
            menuOpen: false,
            shiftMenu: false,
            userOpen: false,

            categories: [
                "MEN",
                "WOMEN",
                "KIDS"
            ],
            category: null,
            loggedIn: false,
            userName: "",
            cartItems: 0,
            search: ""
        };

        this.showSignUp = this.showSignUp.bind(this);
        this.hideSignUp = this.hideSignUp.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.focusId = this.focusId.bind(this);
        this.userClick = this.userClick.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async componentDidMount() {

        const cartItems = getNumberOfItemsInCart();


        if (await isSignedIn()) {



            let email = getUserEmailName()

            if (email) {

  
    
                this.setState({...this.state, cartItems: cartItems, loggedIn: true, userName: email});
    
            } else {
 
                signOut();
                this.setState({...this.state, cartItems: cartItems});
            }

        } else {

            this.setState({...this.state, cartItems: cartItems});
            initUser();
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const cartItems = getNumberOfItemsInCart();
        if (prevState.cartItems !== cartItems) {
            this.setState({...this.state, cartItems: cartItems});
        }
    }

    mouseOver(i) {

        let offset = 0;

        if (this.state.shiftMenu) {
            let nodes = document.getElementById("CategoriesNav").childNodes;
    
            for (let j = 0; j < nodes.length && j < i; j++) {
                offset += nodes[j].offsetWidth;
            }
        }

        this.setState({...this.state, userOpen: false, hover: true, hoveredIndex: offset, menuOpen: false, category: this.state.categories[i]});
    }

    mouseOut() {
        this.setState({...this.state, userOpen: false, menuOpen: false, hover: false, category: null});
    }

    userClick() {
        if (this.state.loggedIn) {
            this.setState({...this.state, userOpen: !this.state.userOpen});
        } else {
            this.showSignUp();
        }
    }

    showSignUp() {
        this.setState({...this.state, userOpen: false, signupShown: true, menuOpen: false, hover:false, category: null});
    }

    hideSignUp() {
        this.setState({...this.state, signupShown: false});
    }

    toggleMenu() {
        this.setState({...this.state, userOpen: false, menuOpen: !this.state.menuOpen, hover:false, category: null})
    }

    focusId(id) {
        this.setState({...this.state, userOpen: false, menuOpen: false, hover:false, category: null})
        let element = document.getElementById(id);
        if (element) {
            element.focus();
        }
    }

   async login() {

        if (await isSignedIn()) {

            let email = getUserEmailName();

            if (email) {
    
                this.setState({...this.state, loggedIn: true, userName: email});
    
            }

        }

    }

    logout() {

        signOut();
        this.setState({...this.state, userOpen: false, menuOpen: false, loggedIn: false, userName: ""});

    }

    handleEnter = (e) => {
        if (e.keyCode === 13 && this.state.search !== "") {

            Router.push(`/categories?search=${escape(this.state.search)}`)

        }
    }

    handleChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value.trim()});
    }

    search = () => {
        
        if (this.state.search !== "") {
            
            Router.push(`/categories?search=${escape(this.state.search)}`)
            
        } else {
            this.focusId("search");
        }
        
    }


    render() {

        return <div className={styles.topNavContainer} onMouseLeave={this.mouseOut}>
            <div className={styles.topNav}>

                    <div className={styles.logo}>
                        <Link href="/"><img id="logo" src="/images/logo.svg"></img></Link>
                    </div>
                    
                    <nav id="CategoriesNav" className={styles.catagories}>
                        {this.state.categories.map((item, i) => {
                        return <a key={i} className={styles.clickableText} 
                        onMouseEnter={() => {this.mouseOver(i)}}><span>{item}</span></a>
                        })}
                    </nav>

                    <div className={styles.right}>
                        <div className={styles.search}>
                            <img onClick={this.search} src="/images/search.svg" htmlFor="search" id="searchImg"></img>
                            <input id="search" onChange={this.handleChange} name="search" onKeyDown={this.handleEnter} placeholder="Search"></input>
                        </div>
                        
                        <div onClick={this.toggleMenu} className={`${styles.hamburger} ${(this.state.menuOpen) ? styles.open : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={`${styles.rightButtons} ${(this.state.menuOpen) ? styles.open : ""}`}>
                            <div className={styles.user}>
                                <a onClick={this.userClick} className={styles.clickableText}>
                                    <img src="/images/user.svg" width="16px" height="16px" id="userImage"></img>
                                    <span>{(this.state.loggedIn) 
                                            ? "HI, " + this.state.userName.toUpperCase() 
                                            : "SIGN IN"}</span>
                                </a>
                                <div className={`${styles.userDropdown} ${(this.state.userOpen) ? styles.userOpen : ""}`}>
                                    <Link href="/orders"><span className={styles.clickableText}><img src="/images/clock.svg"/><span>ORDERS</span></span></Link>
                                    <span className={styles.clickableText}><img src="/images/card.svg"/><span>SAVED INFO</span></span>
                                    <span onClick={this.logout} className={styles.clickableText}><img src="/images/signout.svg"/><span>SIGN OUT</span></span>
                                </div>
                            </div>

                            <a className={styles.clickableText}>
                                <img src="/images/heart.svg" id="heart"></img>
                                <Link href="/wishlist"><span>WISHLIST</span></Link>
                            </a>

                            <Link href="/cart" >
                                <a className={styles.clickableText}>
                                    <img src="/images/cart.svg" id="cart"></img>
                                    <span>CART {(this.state.cartItems > 0) ? `(${this.state.cartItems})` : ""}</span>
                                </a>
                            </Link>
                        </div>

                    </div>
                    
                    {(this.state.signupShown) ? <Dialog close={this.hideSignUp} login={this.login}></Dialog> : null}
                </div>
                {(this.state.hover) ? <Overlay category={this.state.category} offset={this.state.hoveredIndex}></Overlay>: null}
            </div>;

        }

}

export default TopNav;