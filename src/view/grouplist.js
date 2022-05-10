import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom"
import Header from './Header.js';

const GroupList = () => {

    const {state} = useLocation();
    const { id, name } = state;

    const [posts, setPosts] = useState([]);

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
                // console.log(body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    if (posts.length < 1)
        return <><Header/><h3>Loading...</h3></>;

    return (
            <>
                <Header user={name}/>
                {/* <div>name:{name}</div> */}
                <div>id:{id}</div>
                <div>Group:
                    <div class="list-group">
                    {posts.map( (test) => {
                        return (
                            <a href="#" key={test.id} class="list-group-item list-group-item-action">group_id:{test.id}, group_name:{test.name}</a>
                        )
                    })}
                    </div>
                </div>
            </>
        );
}

export default GroupList;