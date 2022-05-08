import React from 'react';
import { useParams, useLocation } from "react-router-dom"
import Header from './Header.js';

const GroupList = () => {

    // let params = useParams()

    // console.log(params.id)

    const {state} = useLocation();
    const { id, name } = state; // Read values passed on state

    let get_groups = async () => {
        const response = await fetch('/ezmiro/ezmiro/group/getGroups?userId='+ id,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await response.text();
        console.log(body)
    }

    return (
            <>
                <Header/>
                <div>name:{name}</div>
                <div>id:{id}</div>
            </>
        );
}

export default GroupList;