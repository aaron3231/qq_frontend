import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom";

import Header from './Header.js';

import '../css/signin.css';
import '../css/navbar-top-fixed.css';
import '../css/bootstrap.min.css';

const GroupList = () => {

    const {state} = useLocation();
    const { id, name } = state;

    const [groups, setGroups] = useState([]);

    const navigate = useNavigate();

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
                setGroups(body);
                // console.log(body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    // const navigateTo = (group) => {
    //     navigate('/group', { state: { userId: id, userName: name, groupId: group.id, groupName: group.name} });
    // }

    if (groups.length < 1)
        return <><Header/><h3>Loading...</h3></>;

    const list = {
        marginLeft: '7vw',
        width: '80vw',
        marginRight: '5vw',
        marginTop: '3vw'
    };

    return (
            <>
                <Header user={name} id={id}/>
                {/* <div>name:{name}</div> */}
                {/* <div>id:{id}</div> */}
                <h3 style={list}>Groups</h3>
                <div class="list-group">
                    {groups.map( (group) => {
                        return (
                            <div key={group.id} style={list}> 
                            <div
                                className="list-group-item list-group-item-action"
                                onClick={() => 
                                            navigate('/group', { state: { 
                                                                    userId: id, 
                                                                    userName: name, 
                                                                    groupId: group.id, 
                                                                    groupName: group.name
                                            }})
                                }>
                                {group.name}
                            </div>
                            <br/>
                            </div>
                        )
                    })}
                    </div>
            </>
        );
}

export default GroupList;