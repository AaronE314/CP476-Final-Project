import React from 'react'

import styles from "../css/Dialog.module.css";

import { signIn } from "../lib/apiRequester";

export class SignInDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            staySignedIn: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value.trim()})
    }

    handleSubmit(e) {
        // TODO: Verify form
        e.preventDefault();
        signIn(this.state.email, this.state.password);
    }

    render() {

        return <form className={styles.form} method="post" onSubmit={this.handleSubmit}>

            <div className={styles.container}>
                <input className={styles.text} name="email" onChange={this.handleChange} placeholder="Email" autoComplete="email" type="email"/>
            </div>
            <div className={styles.container}>
                <input className={styles.text} name="password" onChange={this.handleChange} placeholder="Password" autoComplete="current-password" type="password"/>
            </div>

            <div className={styles.checkBoxContainer}>
                <input className={styles.checkbox} name="staySignedIn" onChange={this.handleChange} type="checkbox"/>
                <label className={styles.span}>Stay signed in</label>
            </div>

            <button className={styles.submit} type="submit">SIGN IN</button>

            <label className={styles.span}><a href="#">Forgot your password?</a></label>

        </form>

    }


}

export default SignInDialog