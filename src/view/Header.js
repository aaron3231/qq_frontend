import React, { Component } from 'react';

import '../css/navbar-top-fixed.css';
import '../css/bootstrap.min.css';

class Header extends Component {

    state = {
        user: '0',
        status: 'false',
    }

    componentDidMount() {
        // this.getAccount()
        //     .then(res => this.setState({ user: res.user }))
        //     .catch(err => console.log(err));
    }

    // getAccount = async () => {
    //     const response = await fetch('/api/status');
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // };

    render() {
        // console.log("header render");
        return (
            <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="navbar-brand" to="/">QQ</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto"></ul>
                </div>
            </nav>
            </>
        );
    }
}
export default Header;