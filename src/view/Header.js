import React, { useEffect, useState } from 'react';

import '../css/navbar-top-fixed.css';
import '../css/bootstrap.min.css';

const Header = (info) => {

    const [showUser, setShowUser] = React.useState(false);

    // useEffect( () => { 
    //     if(info.user !== undefined) {
    //         setShowUser(true);
    //         console.log(info.user);
    //     }   
    // }, []);

    // if(info.user) {
    //     setShowUser(true);
    //     console.log(info.user);
    // }

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
                <User info={info.user}/>
            </div>
        </nav>
        </>
    );
}

const User = (info) => {

    // console.log(info);

    if(!info.info)
        return

    else
        return (
            <label className="navbar-brand">Sign in as &nbsp;&nbsp;<b>{info.info}</b>&nbsp;&nbsp;&nbsp;</label>
        )
}

export default Header;