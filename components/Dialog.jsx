import React from 'react';

import styles from '../css/Dialog.module.css';
import SignUpDialog from './SignUpDialog';
import SignInDialog from './SignInDialog';

/**
 * Defines the component for the a popup dialog
 * 
 * @author Aaron Exley
 */
export class Dialog extends React.Component {

    /**
     * @param {*} props 
     */
    constructor(props) {
        super(props);

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

        if (!this.state.hidden) {
            if (this.props.close) {
                this.props.close();
            }
        }

    }

    render() {

        return <div className={styles.popUpBackground} onMouseDown={this.close}>
            <div className={
                this.state.signUp ? styles.signUp : styles.signIn,
                styles.dialog
                } onMouseDown={(event) => event.stopPropagation()}>

                <img className={styles.close} onClick={this.close} src="/images/close.svg"/>

                <div className={styles.mainSection}>
                    <span className={`${styles.signInButton} ${styles.clickableText}`} onClick={this.setSignIn}>SIGN IN</span>
                    <span className={`${styles.signUpButton} ${styles.clickableText}`} onClick={this.setSignUp}>SIGN UP</span>
                    <hr/>

                    { (this.state.signUp) ? <SignUpDialog close={this.close} login={this.props.login}></SignUpDialog> : <SignInDialog close={this.close} login={this.props.login}></SignInDialog>}
                </div>
            </div>
        </div>;

    }


}

export default Dialog