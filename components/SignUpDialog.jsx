import React from 'react'

// import styles from "../css/Dialog.module.css";

import "../css/Dialog.module.css";

export class SignUpDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            passwordHidden: true,
            RepPasswordHidden: true
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.toggleShowRep = this.toggleShowRep.bind(this);

        console.log(this.state);
    }

    toggleShow(e) {
        e.preventDefault();
        this.setState({passwordHidden: !this.state.passwordHidden});
    }

    toggleShowRep(e) {
        e.preventDefault();
        this.setState({RepPasswordHidden: !this.state.RepPasswordHidden});
    }

    render() {

        return <form>
            
            <div className="container">
                <input autoComplete="email" className="text" type="email" placeholder="Email"/>
            </div>
            <div className="container">
                <input autoComplete="new-password" className="text" type={this.state.passwordHidden ? "password" : "text"}
                placeholder="Password"/>
                <span className="showHide" onClick={this.toggleShow}>
                        {this.state.passwordHidden ? "Show" : "Hide"}
                </span>
            </div>
            <div className="container">
                <input autoComplete="new-password" className="text" type={this.state.RepPasswordHidden ? "password" : "text"}
                placeholder="Repeat password"/>
                <span className="showHide" onClick={this.toggleShowRep}>
                    {this.state.RepPasswordHidden ? "Show" : "Hide"}
                </span>
            </div>
            <div className="checkBoxContainer">
                <input className="checkbox" type="checkbox"/>
                <label className="span">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.</label>
            </div>
            
            <div className="checkBoxContainer">
                <input className="checkbox" type="checkbox"/>
                <label className="span">I would like to receive promotional material and update related to my interests.</label>
            </div>

            <button className="submit" type="submit">SIGN UP</button>
            
        </form>

    }


}

export default SignUpDialog