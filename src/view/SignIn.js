import React from 'react';
import { useNavigate } from "react-router-dom"

import Header from './Header.js';

import '../css/signin.css';
import '../css/navbar-top-fixed.css';
import '../css/bootstrap.min.css';

const SignIn = () => {

    const navigate = useNavigate();

    let state = {
        response: '',
        user: 'UserA',
    };

    let signIn = async e => {
        e.preventDefault();
        const response = await fetch('/ezmiro/ezmiro/user/userChecked?username='+state.user,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await response.text();
        console.log(body)
        if (body != null)
            navigate('/grouplist', { state: { id: body, name: state.user } });
    };

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

    if (!state.response)
        errorLabel = <label style={error}>{state.response}</label>;
    // else
    //     return <Navigate to={state.response}/>;

    return (
        <>
            <Header/>
            <form className="form-signin text-center" onSubmit={signIn}>
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <label style={l}>User</label>
                <input
                    type="text"
                    defaultValue={state.user}
                    onChange={e => state.user = e.target.value}
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

export default SignIn;