import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header.js';

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

    return (
            <>
                <Header user={name}/>
                {/* <div>name:{name}</div> */}
                <div>id:{id}</div>
                <div>Group:
                    <div class="list-group">
                    {groups.map( (group) => {
                        return (
                            <div onClick={() => 
                                            navigate('/group', { state: { 
                                                                    userId: id, 
                                                                    userName: name, 
                                                                    groupId: group.id, 
                                                                    groupName: group.name
                                                    } })
                                        }
                                key={group.id} 
                                className="list-group-item list-group-item-action">
                                    group_id:{group.id}, group_name:{group.name}
                            </div>
                        )
                    })}
                    </div>
                </div>
            </>
        );
}

export default GroupList;