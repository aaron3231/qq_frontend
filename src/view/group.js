import React, {useState, useEffect} from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Header from './Header.js';
import AddPayment from './AddPayment.js';
import AddSettlement from './AddSettlement.js';

const Group = () => {

    const {state} = useLocation();
    const { userId, userName, groupId, groupName } = state;

    const [members, setMembers] = useState([]);
    const [payments, setPayments] = useState([]);
    const [settlements, setSettlements] = useState([]);
    const [relationship, setRelationship] = useState([]);

    const [paymentModalShow, setPaymentModalShow] = useState(false);
    const [settlementModalShow, setSettlementModalShow] = useState(false);

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
                // console.log(body);
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
        async function fetchSettlements() {
            try {
                const res = await fetch('/ezmiro/ezmiro/group/getSettlements?groupId='+ groupId,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const body = await res.json();
                setSettlements(body);
                console.log(body);
            } catch (err) {
                console.log(err);
            }
        }
        async function fetchRelationship() {
            try {
                const res = await fetch('/ezmiro/ezmiro/group/getRelationship?groupId=' + groupId + "&userId=" + userId,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const body = await res.json();
                setRelationship(body);
                console.log(body);
            } catch (err) {
                console.log(err);
            }
        }
        fetchMembers();
        fetchPayments();
        fetchSettlements();
        fetchRelationship();
    }, []);

    const list = {
        marginLeft: '7vw',
        width: '80vw',
        marginRight: '5vw',
        marginTop: '3vw'
    };

    const top_div = {
        display: 'flex'
    }

    if (members.length < 1)
        return <><Header/><h3 style={list}>Loading...</h3></>;

    return (
            <>
                <AddPayment show={paymentModalShow} groupid={groupId} members={members} onHide={() => {
                    setPaymentModalShow(false)
                    window.location.reload(false);
                }}/>
                <AddSettlement show={settlementModalShow} groupid={groupId} member={members} onHide={() => {
                    setSettlementModalShow(false)
                    window.location.reload(false);
                }}/>
                <Header user={userName} id={userId}/>
                <h3 style={list}>{groupName}</h3>
                <div style={top_div}>
                    <div style={list}>
                        <ButtonToolbar className="btn-group" role="group" aria-label="Basic example">
                            <ButtonGroup aria-label="First group">
                                <Button onClick={() => setPaymentModalShow(true)}>Add Payment</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <br/>
                        <ButtonToolbar className="btn-group" role="group" aria-label="Basic example">
                            <ButtonGroup className="me-2" aria-label="Second group">
                                <Button onClick={() => setSettlementModalShow(true)}>Add Settlement</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    <div style={list}>
                        {relationship.map((ship, index) => {
                            if(parseFloat(ship.amount) === 0)
                            return (
                                <div key={index}></div>
                            );
                            if(parseFloat(ship.amount) > 0) {
                                let amount = parseFloat(ship.amount).toFixed(2);
                                return (
                                    <Card bg='success' style={{ width: '18rem' }} key={index}>
                                    <Card.Body>
                                        <Card.Text>
                                        {ship.userName} owe you {amount}
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    // <div key={index}>{ship.userName} owe you {amount}</div>
                                );
                            }
                            else {
                                let amount = -parseFloat(ship.amount).toFixed(2);
                                return (
                                    <Card bg='danger' key={index} style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Text >
                                        {ship.userName} owe you {amount}
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                    // <div key={index}>{ship.userName} owe you {amount}</div>
                                );
                            }
                        })}
                    </div>
                </div>
                <Tabs defaultActiveKey="payments" id="uncontrolled-tab-example" className="mb-3" style={list}>
                    <Tab eventKey="payments" title="Payments" >
                        <Table striped bordered hover style={list}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Payer</th>
                                <th>Debtor</th>
                                <th>Date</th>
                                <th>Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{payment.description}</td>
                                        <td>{payment.amount}</td>
                                        {/* <td>{payment.paymentId}</td> */}
                                        <td>{payment.payerName}</td>
                                        <td>#TODO</td>
                                        <td>{payment.date}</td>
                                        <td>{payment.note}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="settlements" title="Settlements">
                    <Table striped bordered hover style={list}>
                        <thead>
                            <tr>
                                <th>Settler</th>
                                <th>Receiver</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {settlements.map((settlement, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{settlement.userAName}</td>
                                        <td>{settlement.userBName}</td>
                                        <td>{settlement.amount}</td>
                                        {/* <td>{settlement.settlementId}</td> */}
                                        <td>{settlement.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="report" title="Report">
                        
                    </Tab>
                </Tabs>
            </>
        );
}

export default Group;