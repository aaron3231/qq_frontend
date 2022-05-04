import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

import Header from './Header.js';

import '../css/signin.css';
import '../css/navbar-top-fixed.css';
import '../css/bootstrap.min.css';

class SignIn extends Component {
    state = {
        response: '',
        user: '',
    };

    componentDidMount() {
        // this.signOut()
        //     .then(res => this.setState({ user: res.user }))
        //     .catch(err => console.log(err));
    }

    // signOut = async () => {
    //     const response = await fetch('/api/signOut');
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // };

    signIn = async e => {
        e.preventDefault();
        const response = await fetch('/api/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: this.state.user }),
        });
        const body = await response.text();
        this.setState({ response: body });
    };

    render() {
        const l = {
            textAlign: 'left',
            width: '100%'
        };

        const error = {
            textAlign: 'left',
            width: '100%',
            color: 'red',
        }

        let errorLabel;

        // if (this.state.response === "error")
        //     errorLabel = <label style={error}>{this.state.response}</label>;
        // else if (this.state.response === "access")
        //     return <Navigate to='/main' />;

        return (
            <>
                <Header />
                <form className="form-signin text-center" onSubmit={this.signIn}>
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    <label style={l}>Account</label>
                    <input
                        type="text"
                        value={this.state.account}
                        onChange={e => this.setState({ account: e.target.value })}
                        className="form-control"
                        placeholder="Account"
                        required
                        autoFocus
                    />
                    <br></br>
                    {errorLabel}
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </>
        );
    }
}
export default SignIn;