import React from 'react'

import styles from "../css/Dialog.module.css";
import { signUp } from "../lib/apiRequester";
import { setToken } from '../lib/userAuth'
import isEmail from 'validator/lib/isEmail';

export class SignUpDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            passwordHidden: true,
            RepPasswordHidden: true,
            email: "",
            password: "",
            passwordRepeat: "",
            getEmails: false,
            terms: false,

            emailError: "",
            passwordError: "",
            passwordRepeatError: "",
            userError: ""
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.toggleShowRep = this.toggleShowRep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleShow(e) {
        e.preventDefault();
        this.setState({passwordHidden: !this.state.passwordHidden});
    }

    toggleShowRep(e) {
        e.preventDefault();
        this.setState({RepPasswordHidden: !this.state.RepPasswordHidden});
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value.trim()})
    }

    validate = () => {

        let emailError = "";
        let passwordError = "";
        let passwordRepeatError = "";

        if (this.state.email === "" || !isEmail(this.state.email)) {
            emailError = "Please enter a valid email."
        }

        if (this.state.password === "") {
            passwordError = "Please enter a password."
        }

        if (this.state.passwordRepeat === "" || this.state.passwordRepeat !== this.state.password) {
            passwordRepeatError = "Passwords don't match."
        }

        this.setState({...this.state, emailError, passwordError, passwordRepeatError});

        return emailError === "" && passwordError === "" && passwordRepeatError === "";

    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            signUp(this.state.email, this.state.password)
            .then((data) => {
                
                console.log(data);
                
                if (data.status === "ok") {
                    
                    setToken(!this.state.staySignedIn, data);
                    
                    this.props.login();
                    
                    this.props.close();
    
                    
                } else {
                    
                    this.setState({...this.state, userError: data.message.split(":")[1]});
                }
                
            });
        }
    }

    render() {

        return <form onSubmit={this.handleSubmit} className={styles.form} noValidate>
            
            <div className={styles.container}>
                <input autoComplete="email" name="email" onChange={this.handleChange} className={styles.text} type="email" placeholder="Email" autoComplete="email"/>
                <p className={styles.error}>{this.state.emailError}</p>
            </div>
            <div className={styles.container}>
                <input autoComplete="new-password" name="password" onChange={this.handleChange} className={styles.text} type={this.state.passwordHidden ? "password" : "text"}
                placeholder="Password"/>
                <span className={styles.showHide} onClick={this.toggleShow}>
                        {this.state.passwordHidden ? "Show" : "Hide"}
                </span>
                <p className={styles.error}>{this.state.passwordError}</p>
            </div>
            <div className={styles.container}>
                <input autoComplete="new-password" name="passwordRepeat" onChange={this.handleChange} className={styles.text} type={this.state.RepPasswordHidden ? "password" : "text"}
                placeholder="Repeat password"/>
                <span className={styles.showHide} onClick={this.toggleShowRep}>
                    {this.state.RepPasswordHidden ? "Show" : "Hide"}
                </span>
                <p className={styles.error}>{this.state.passwordRepeatError}</p>
            </div>
            <div className={styles.checkBoxContainer}>
                <input className={styles.checkbox} type="checkbox" name="terms" onChange={this.handleChange}/>
                <label className={styles.span}>I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.</label>
            </div>
            
            <div className={styles.checkBoxContainer}>
                <input className={styles.checkbox} type="checkbox" name="getEmails" onChange={this.handleChange}/>
                <label className={styles.span}>I would like to receive promotional material and update related to my interests.</label>
            </div>

            <button className={styles.submit} type="submit">SIGN UP</button>

            <p className={styles.error}>{this.state.userError}</p>
            
        </form>

    }


}

export default SignUpDialog