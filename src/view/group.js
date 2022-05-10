import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header.js';
import Table from 'react-bootstrap/Table'

const Group = () => {

    const {state} = useLocation();
    const { userId, userName, groupId, groupName } = state;

    const [members, setMembers] = useState([]);
    const [payments, setPayments] = useState([]);

    // const navigate = useNavigate();

    useEffect( () => {
        console.log(groupId);
        async function fetchMembers() {
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
        async function fetchPayments() {
            try {
                const res = await fetch('/ezmiro/ezmiro/group/getPayments?groupId='+ groupId,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const body = await res.json();
                setPayments(body);
                console.log(body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchMembers();
        fetchPayments();
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
                <div>Payments
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Payment ID</th>
                            <th>Payer</th>
                            <th>Date</th>
                            <th>Debtor</th>
                            <th>Amount</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => {
                            return (
                                <tr key={payment} >
                                    <td>{payment.description}</td>
                                    <td>{payment.paymentId}</td>
                                    <td>{payment.payerName}</td>
                                    <td>{payment.date}</td>
                                    <td>#TODO</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.note}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </div>

            </>
        );
}

export default Group;