import React from 'react';
import styles from "../css/Footer.module.css";


export class Footer extends React.Component {

    render() {

    return <div className={styles.Footer}>
            <div className={styles.aboutCol}>
                <div className={styles.titles}><a >About</a><br/></div>
                
                <a>Links</a><br/>
                <a>More Links </a>
            </div>
            <div className={styles.helpCol}>
                <div className = {styles.titles}><a >Help</a><br/></div>
                
                <a>FAQ</a><br/>
                <a>Contact US</a><br/>
                <a>Shipping</a><br/>
                <a>Return Policy</a><br/>
            </div>
            <p className={styles.copyright}>copyright © All Rights Reserved.</p>
            <p className={styles.tos}>Terms Of Service</p>
            <p className={styles.privacyPol}>Privacy Policy</p>
        </div>;

    }

}

export default Footer;