import React from 'react';

import styles from '../css/Dialog.module.css';
import SignUpDialog from './SignUpDialog';
import SignInDialog from './SignInDialog';

// import '../css/Dialog.module.css';

export class Dialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signUp: true
        };

        this.setSignUp = this.setSignUp.bind(this);
        this.setSignIn = this.setSignIn.bind(this);
    }

    setSignUp() {
        this.setState({signUp: true});
    }

    setSignIn() {
        this.setState({signUp: false});
    }

    render() {

        return <div className={
            this.state.signUp ? styles.signUp : styles.signIn,
            styles.dialog
            }>

            <img className={styles.close} src="/images/close.svg"/>

            <div className={styles.mainSection}>
                <span className={styles.signUpButton} onClick={this.toggleSignIn}>SIGN IN</span>
                <span className={styles.signInButton} onClick={this.toggleSignUp}>SIGN UP</span>
                <hr/>

                { (this.state.signUp) ? <SignUpDialog></SignUpDialog> : <SignInDialog></SignInDialog>}
            </div>
        </div>

    }


}

export default SignInDialog