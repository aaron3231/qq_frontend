import React, {useState, useEffect} from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab, Modal, ToggleButton, Form, ToggleButtonGroup } from 'react-bootstrap';
import Select from 'react-select'

const AddPayment = (props) => {

    const [payment, newPayment] = useState();
    // const [paymentData, setPaymentData] = useState({});

    const [payerId, setPayerId] = useState();

    var members = []
    props.members.forEach(element => {
      members.push({label: element.name, value: element.id})
    });
    
    
    const addPayment = (event) => {
      try {
          var debtors = []
          event.target.debtor.forEach(item => {
            debtors.push(item.value)
          })
          const res = fetch('/ezmiro/ezmiro/payment/create?groupId='+ props.groupId,
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                payerId: event.target.payer.value,
                amount: event.target.amount.value,
                debtors: debtors,
                description: event.target.description.value,
                note: event.target.note.value,
                date: event.target.date.value
              })
          });
          const result = res.json();
      } catch (err) {
          // console.log(err);
      }
    }

    
  //   useEffect( () => { 
      
  //     // addPayment();
  // }, []);

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Payment
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={addPayment}>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Payer</Form.Label>
                      <Select options={members} name="payer"/>
                    <Form.Label>Amount</Form.Label>
                      <Form.Control
                              type="text"
                              placeholder="amount"
                              autoFocus
                              required
                              name="amount"
                          />
                    <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="description"
                            autoFocus
                            required
                            name="description"
                        />
                    </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Debtor</Form.Label>
                    {/* <Form.Control > */}
                    <Select
                      closeMenuOnSelect={false}
                      isMulti
                      options={members}
                      name="debtor"
                    />
                    <Form.Label>Date</Form.Label>
                      <Form.Control
                                type="date"
                                autoFocus
                                required
                                name="date"
                            />
                    <Form.Label>Note</Form.Label>
                      <Form.Control
                                as="textarea"
                                name="note"
                            />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                      Close
                  </Button>
                  <Button variant="primary" type="submit">
                      Add
                  </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      );
}

export default AddPayment;