import React from 'react';
import styles from "../css/Footer.module.css";
import Link from 'next/link';

/**
 * Defines the component for the footer
 * 
 * @author Austin Bursey
 */
export class Footer extends React.Component {

    render() {

    return <div className={styles.Footer}>
            <div className={styles.linksWrapper}>
                <div className={styles.aboutCol}>
                    <div className={styles.titles}><a >About</a><br/></div>
                    <ul>
                        <li><Link href="/terms">Terms of Service</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className={styles.helpCol}>
                    <div className = {styles.titles}><a  href="#">Help</a><br/></div>
                    <ul>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/shipping">Shipping</Link></li>
                        <li><Link href="/returns">Return Policy</Link></li>
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