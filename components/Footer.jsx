import React from 'react';
import styles from "../css/Footer.module.css";


export class Footer extends React.Component {

    render() {

    return <div className={styles.Footer}>
            <div className={styles.aboutCol}>
                <div className={styles.titles}><a >About</a><br/></div>
                
                <a href="#">Links</a><br/>
                <a href="#">More Links </a>
            </div>
            <div className={styles.helpCol}>
                <div className = {styles.titles}><a  href="#">Help</a><br/></div>
                
                <a href="#">FAQ</a><br/>
                <a href="#">Contact Us</a><br/>
                <a href="#">Shipping</a><br/>
                <a href="#">Return Policy</a><br/>
            </div>
            <a className={styles.copyright} href="#">All Images are copyright to their owners. This is just a hypothetical site For a School Project.</a>
            <a className={styles.tos} href="#">Terms Of Service</a>
            <a className={styles.privacyPol} href="#">Privacy Policy</a>
        </div>;

    }

}

export default Footer;