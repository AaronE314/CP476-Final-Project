import React from 'react'

export class SignInDialog extends React.Component {

    render() {

        return <form>

            <input placeholder="Email" type="email"></input>
            <input placeholder="Password" type="password"></input>

            <div>
                <input type="checkbox"/>
                Stay signed in
            </div>

            <button type="submit">SIGN IN</button>

        </form>

    }


}

export default SignInDialog