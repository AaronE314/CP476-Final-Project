import React from 'react';

import styles from '../css/Dialog.module.css';
import SignUpDialog from './SignUpDialog';
import SignInDialog from './SignInDialog';

// import '../css/Dialog.module.css';

export class Dialog extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            signUp: false,
            hidden: false,
        };

        this.setSignUp = this.setSignUp.bind(this);
        this.setSignIn = this.setSignIn.bind(this);
        this.close = this.close.bind(this);
    }

    setSignUp() {
        this.setState({...this.state, signUp: true});
    }

    setSignIn() {
        this.setState({...this.state, signUp: false});
    }

    close() {

        // this.setState({...this.state, hidden: true});

        if (!this.state.hidden) {
            if (this.props.close) {
                this.props.close();
            }
        }

    }

    render() {

        return <div className={styles.popUpBackground} onClick={this.close}>
            <div className={
                this.state.signUp ? styles.signUp : styles.signIn,
                styles.dialog
                } onClick={(event) => event.stopPropagation()}>

                <img className={styles.close} onClick={this.close} src="/images/close.svg"/>

                <div className={styles.mainSection}>
                    <span className={`${styles.signUpButton} ${styles.clickableText}`} onClick={this.setSignUp}>SIGN IN</span>
                    <span className={`${styles.signInButton} ${styles.clickableText}`} onClick={this.setSignIn}>SIGN UP</span>
                    <hr/>

                    { (this.state.signUp) ? <SignUpDialog></SignUpDialog> : <SignInDialog></SignInDialog>}
                </div>
            </div>
        </div>;

    }


}

export default Dialog