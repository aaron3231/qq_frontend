import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";

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
            <Link id={info.id} user={info.user}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto"></ul>
                <User user={info.user}/>
            </div>
        </nav>
        </>
    );
}

const Link = (info) => {

    console.log("qq link info", info);

    const navigate = useNavigate();

    const hover = {
        cursor: 'pointer'
    };

    if(!info.id)
        return (
            <div className="navbar-brand">QQ</div>
        )

    else
        return (
            <div className="navbar-brand"
                 style={hover}
                 onClick={() => 
                 navigate('/grouplist', { state: { 
                                    id: info.id, 
                                    name: info.user
                 }})}>QQ</div>
        )
}

const User = (info) => {

    console.log("user info", info);

    if(!info.user)
        return

    else
        return (
            <label className="navbar-brand">Sign in as &nbsp;&nbsp;<b>{info.user}</b>&nbsp;&nbsp;&nbsp;</label>
        )
}

export default Header;