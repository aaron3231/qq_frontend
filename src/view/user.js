import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import Header from './Header.js';

import '../css/signin.css';
import '../css/navbar-top-fixed.css';
import '../css/bootstrap.min.css';

const User = () => {

    const {state} = useLocation();
    const { id, name } = state;

    const [info, setInfo] = useState({name:'name', phone:'phone', email:'email'});
    const [change, setChange] = useState({name:'name', phone:'phone', email:'email'});

    // const navigate = useNavigate();

    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await fetch('/ezmiro/ezmiro/user/getUserInfo?userId='+ id,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const body = await res.json();
                setInfo(body);
                setChange(body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    let changeName = async e => {
        e.preventDefault();
        if(change.name == info.name)
            return
        try {
            fetch('/ezmiro/ezmiro/user/changeName?userId='+id,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: change.name
                })
            });
        } catch (err) {
            console.log(err);
        }
        const body = await response.text();
        window.location.reload(false);
    };

    let changePhone = async e => {
        e.preventDefault();
        if(change.phone == info.phone)
            return
        try {
            fetch('/ezmiro/ezmiro/user/changeName?userId='+id,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: change.phone
                })
            });
        } catch (err) {
            console.log(err);
        }
        const body = await response.text();
        window.location.reload(false);
    };

    let changeEmail = async e => {
        e.preventDefault();
        if(change.email == info.email)
            return
        try {
            fetch('/ezmiro/ezmiro/user/changeName?userId='+id,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: change.email
                })
            });
        } catch (err) {
            console.log(err);
        }
        const body = await response.text();
        window.location.reload(false);
    };

    if (info.length < 1)
        return <><Header/><h3>Loading...</h3></>;

    const list = {
        marginLeft: '7vw',
        width: '80vw',
        marginRight: '5vw',
        marginTop: '3vw'
    };

    return (
            <>
                <Header user={info.name} id={info.id}/>
                <h3 style={list}>User information update</h3>
                <form className="form-signin text-center" onSubmit={changeName}>
                    <h1 className="h3 mb-3 font-weight-normal">Information update</h1>
                    <label style={l}>Name</label>
                    <input
                        type="text"
                        defaultValue={change.name}
                        onChange={e => change.name = e.target.value}
                        className="form-control"
                        placeholder="Name"
                    />
                    <br></br>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">update</button>
                </form>
                <form className="form-signin text-center" onSubmit={changePhone}>
                    <h1 className="h3 mb-3 font-weight-normal">Information update</h1>
                    <label style={l}>Phone</label>
                    <input
                        type="text"
                        defaultValue={change.phone}
                        onChange={e => change.phone = e.target.value}
                        className="form-control"
                        placeholder="09XX..."
                    />
                    <br></br>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">update</button>
                </form>
                <form className="form-signin text-center" onSubmit={changeEmail}>
                    <h1 className="h3 mb-3 font-weight-normal">Information update</h1>
                    <label style={l}>Email</label>
                    <input
                        type="text"
                        defaultValue={change.email}
                        onChange={e => change.email = e.target.value}
                        className="form-control"
                        placeholder="XXX@XXX.com"
                    />
                    <br></br>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">update</button>
                </form>
            </>
        );
}

export default User;