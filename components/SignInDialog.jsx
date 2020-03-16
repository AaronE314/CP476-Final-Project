import React from 'react'

import styles from "../css/Dialog.module.css";

export class SignInDialog extends React.Component {

    render() {

        return <form className={styles.form} method="post">

            <div className={styles.container}>
                <input className={styles.text} placeholder="Email" type="email"/>
            </div>
            <div className={styles.container}>
                <input className={styles.text} placeholder="Password" type="password"/>
            </div>

            <div className={styles.checkBoxContainer}>
                <input className={styles.checkbox} type="checkbox"/>
                <label className={styles.span}>Stay signed in</label>
            </div>

            <button className={styles.submit} type="submit">SIGN IN</button>

            <label className={styles.span}><a href="#">Forgot your password?</a></label>

        </form>

    }


}

export default SignInDialog