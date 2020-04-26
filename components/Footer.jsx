import React from 'react';
import styles from "../css/Footer.module.css";


export class Footer extends React.Component {

    render() {

    return <div className={styles.Footer}>
            <div className={styles.linksWrapper}>
                <div className={styles.aboutCol}>
                    <div className={styles.titles}><a >About</a><br/></div>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">User Guide</a></li>
                    </ul>
                </div>
                <div className={styles.helpCol}>
                    <div className = {styles.titles}><a  href="#">Help</a><br/></div>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Return Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomLinkWrapper}>
                <a className={styles.copyright} href="#">All Images are copyright to their owners. This is just a hypothetical site For a School Project.</a>
            </div>
        </div>;

    }

}

export default Footer;