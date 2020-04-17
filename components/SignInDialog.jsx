import React from 'react'

import styles from "../css/Dialog.module.css";

import { signIn } from "../lib/apiRequester";
import { setUser } from '../lib/userAuth'
import isEmail from 'validator/lib/isEmail';

export class SignInDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            staySignedIn: false,

            emailError: "",
            passwordError: "",
            userError: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value.trim()})
    }

    validate = () => {

        let emailError = ""
        let passwordError = ""

        if (this.state.email === "" || !isEmail(this.state.email)) {
            emailError = "Please enter a valid email."
        }

        if (this.state.password === "") {
            passwordError = "Please enter your password."
        }

        this.setState({...this.state, emailError, passwordError});

        return emailError === "" && passwordError === "";

    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {

            signIn(this.state.email, this.state.password, this.state.staySignedIn)
            .then((data) => {
                
                console.log(data);
                
                if (data.status === "ok") {
                    
                    setUser(!this.state.staySignedIn, data);
                    
                    console.log("setUser");

                    this.props.login();
                    
                    this.props.close();
                    
                } else {
                    
                    this.setState({...this.state, userError: data.message.split(":")[1]});

                }
                
            });
        }
        
    }

    render() {

        return <form className={styles.form} method="post" onSubmit={this.handleSubmit} noValidate>

            <div className={styles.container}>
                <input className={`${styles.text} ${(this.state.emailError !== "") ? styles.error: ""}`} name="email" onChange={this.handleChange} placeholder="Email" autoComplete="email" type="email"/>
                <p className={styles.error}>{this.state.emailError}</p>
            </div>
            <div className={styles.container}>
                <input className={`${styles.text} ${(this.state.passwordError !== "") ? styles.error: ""}`} name="password" onChange={this.handleChange} placeholder="Password" autoComplete="current-password" type="password"/>
                <p className={styles.error}>{this.state.passwordError}</p>
            </div>

            <div className={styles.checkBoxContainer}>
                <input className={styles.checkbox} name="staySignedIn" onChange={this.handleChange} type="checkbox"/>
                <label className={styles.span}>Stay signed in</label>
            </div>

            <button className={styles.submit} type="submit">SIGN IN</button>

            <p className={styles.error}>{this.state.userError}</p>

            <p className={styles.span}><a href="#">Forgot your password?</a></p>

        </form>

    }


}

export default SignInDialog