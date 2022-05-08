import React, { Component } from 'react';
import { Navigate, useNavigate, createSearchParams, History } from "react-router-dom"
import Header from './Header.js';
import SignIn from './SignIn.js';

class GroupList extends Component {
    
    state = {
        
    }

    componentDidMount(props) {
        
        console.log(props.location);
        // this.state.user = this.props.location.user;
        // this.get_groups();
    }

    get_groups = async () => {
        const history = useNavigate();
        const user = history.location.state.data;
        const response = await fetch('/ezmiro/ezmiro/group/getGroups?userId='+ user,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await response.text();
        console.log(body)
        this.setState({ grouplist: body }); // TODO
    }

    render() {
        const l = {
            textAlign: 'left',
            width: '100%'
        };

        const error = {
            textAlign: 'left',
            width: '100%',
            color: 'red',
        }

        let content;

        content = <label style={error}>{this.state.grouplist}</label>;

        return (
            <>
                <Header/>
                {content}
            </>
        );
    }
}
export  {GroupList};