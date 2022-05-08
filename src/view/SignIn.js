import React, { Component } from 'react';
import { Navigate, useNavigate } from "react-router-dom"

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
        // this.goToGroupList()
    }

    // signOut = async () => {
    //     const response = await fetch('/api/signOut');
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // };

    // goToGroupList = () => {
    //     useNavigate({
    //         pathname: '/grouplist',
    //         search: `?${{user:this.state.user}}}`,
    //     });
    // };

    signIn = async e => {
        // const history = useNavigate();
        e.preventDefault();
        const response = await fetch('/ezmiro/ezmiro/user/userChecked?username='+this.state.user,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await response.text();
        console.log(body)
        this.setState({ response: body }); // TODO
        this.setState({user: body});
        console.log(this.state.user);
        // history.push("/grouplist", {data: this.state.response});
        // if (this.state.response != null)
            // useNavigate({
            //     pathname: '/grouplist'
            // });
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

        if (!this.state.response)
            errorLabel = <label style={error}>{this.state.response}</label>;
        else
            return <Navigate exact to={{
                pathname: '/grouplist',
                state: {user:this.state.response}
            }}/>;
        // else if (this.state.response === "access")
        //     return <Navigate to='/main' />;

        return (
            <>
                <Header/>
                <form className="form-signin text-center" onSubmit={this.signIn}>
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                    <label style={l}>User</label>
                    <input
                        type="text"
                        value={this.state.account}
                        onChange={e => this.setState({ user: e.target.value })}
                        className="form-control"
                        placeholder="User"
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