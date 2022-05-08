import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom"
import Header from './Header.js';

const GroupList = () => {

    const {state} = useLocation();
    const { id, name } = state;

    const [posts, setPosts] = useState([1]);

    useEffect( () => { 
        async function fetchData() {
            try {
                const res = await fetch('/ezmiro/ezmiro/group/getGroups?userId='+ id,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const body = await res.json();
                setPosts(body);
                console.log(body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    if (posts.length < 1)
        return <h3>Loading...</h3>;

    return (
            <>
                <Header/>
                <div>name:{name}</div>
                <div>id:{id}</div>
                <div>Group:{posts.map( (test) => {
                    return (
                        <>
                        <br/>
                        <div key={{test}}>group_id:{test.id}_____group_name:{test.name}</div>
                        </>
                    )
                })}</div>
            </>
        );
}

export default GroupList;