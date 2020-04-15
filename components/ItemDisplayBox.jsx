import React from 'react';
import styles from "../css/ItemDisplayBox.module.css";
import Link from 'next/link';

export class ItemDisplayBox extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.value;
        console.log(this.state)
        this.getAdjustedPrice = this.getAdjustedPrice.bind(this);
        this.hoverOn = this.hoverOn.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
        this.updateWishlist = this.updateWishlist.bind(this);
    }

    getAdjustedPrice(){
        return Math.round((this.state.price * (1 - this.state.discount)) * 100) / 100
    }

    hoverOn(colourLink){
        // document.getElementById("displayTemp").style.background = colourLink;
        //Replace later with changing the image with id = displayImage
        // document.getElementById("displayImage").src = colourLink;
        this.setState({...this.state, displayImageIndex: colourLink, displayColorIndex: colourLink});
    }

    hoverOff(){
        // document.getElementById("displayTemp").style.background = this.state.colours[0].link;
        //Replace later with changing the image with id = displayImage
        // document.getElementById("displayImage").src = this.state.colours[0].link;
        this.setState({...this.state, displayImageIndex: 0, displayColorIndex: 0});
    }

    updateWishlist(){
        this.setState({...this.state, wishlisted: !this.state.wishlisted});
    }
    
    render() {
        let highlightColor = "#FFF500";
        if (typeof window !== 'undefined') {
            highlightColor = window.getComputedStyle(document.documentElement).getPropertyValue('--highlightColor');
        }

        return <div className={styles.DisplayItem}>
            <div className={styles.DisplayImage} id="displayTemp" style={{background: this.state.colours[this.state.displayImageIndex].hex}}>
            <Link href={{pathname: "/productDetail", query: {id: this.state.productId}}}><img className={styles.img} src={this.state.colours[this.state.displayImageIndex].link} id="displayImage"></img></Link>
            <img onClick={this.updateWishlist} className={styles.DisplayWishlist} src="/images/heart.svg"></img>
                {(this.state.wishlisted) ? 
                    <svg className={styles.DisplayWishlistInner} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.95 0C14.036 0 12.199 0.882834 11 2.27793C9.80099 0.882834 7.96399 0 6.04999 0C2.66199 0 -1.37687e-05 2.6376 -1.37687e-05 5.99455C-1.37687e-05 10.1144 3.73999 13.4714 9.40499 18.5722L11 20L12.595 18.5613C18.26 13.4714 22 10.1144 22 5.99455C22 2.6376 19.338 0 15.95 0Z" fill={highlightColor}/>
                    </svg> : null
                }
            </div>
                    
            <div className={styles.DisplayInfo}>
                <p>{this.state.productName}</p>
                {(this.state.discount > 0) ? <p className={styles.DisplayDiscount} style={{background: highlightColor}}>${this.getAdjustedPrice()}</p> : null}
                {(this.state.discount > 0) ? <p className={styles.DisplayOldPrice}>${this.state.price.toFixed(2)}</p> : <p>${this.state.price.toFixed(2)}</p>}
                <div className={styles.DisplayColorContainer}>
                    {this.state.colours.map((item, i) => {
                        return <div key={i} className={styles.DisplayColorOption} style={{background: item.hex}} onMouseOver={() => {this.hoverOn(i)}} onMouseOut={() => {this.hoverOff()}}></div>
                    })}
                </div>
            </div>
        </div>
    }
}

export default ItemDisplayBox;