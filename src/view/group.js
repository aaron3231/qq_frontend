import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header.js';

const Group = () => {

    const {state} = useLocation();
    const { userId, userName, groupId, groupName } = state;

    const [members, setMembers] = useState([]);

    // const navigate = useNavigate();

    useEffect( () => {
        console.log(groupId);
        async function fetchData() {
            try {
                const res = await fetch('/ezmiro/ezmiro/group/getMembers?groupId='+ groupId,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const body = await res.json();
                setMembers(body);
                console.log(body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    if (members.length < 1)
        return <><Header/><h3>Loading...</h3></>;

    return (
            <>
                <Header user={userName}/>
                {/* <div>name:{name}</div> */}
                <div>userId:{userId}</div>
                <div>GroupId:{groupId}</div>
                <div>GroupName:{groupName}</div>
                <div>Members:
                    <div class="btn-group" role="group" aria-label="Basic example">
                        {members.map((member) => {
                            return (
                                <div key={member.id} 
                                    class="btn btn-secondary">
                                        {member.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
}

export default Group;