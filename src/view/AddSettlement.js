import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import Select from 'react-select'

const AddSettlement = (props) => {

    var members = [];

    props.member.forEach(member => {
      members.push({label: member.name, value: member.id})
    });
    
    let addSettlement = (event) => {
      event.preventDefault();
      try {
          fetch('/ezmiro/ezmiro/settlement/create?groupId='+ props.groupid,
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userAId: event.target.settler.value,
                userBId: event.target.receiver.value,
                amount: event.target.amount.value,
                date: event.target.date.value
              })
          });
          props.onHide()
      } catch (err) {
          // console.log(err);
      }
    }

    return (
      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Settlement
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={addSettlement}>
          <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Settler</Form.Label>
                  <Select options={members} required name="settler"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Receiver</Form.Label>
                  <Select options={members} required name="receiver"/>
                </Form.Group>
                <Form.Label>Amount</Form.Label>
                  <Form.Control
                          type="text"
                          placeholder="amount"
                          autoFocus
                          required
                          name="amount"
                  />
                <Form.Label>Date</Form.Label>
                  <Form.Control
                          type="date"
                          autoFocus
                          required
                          name="date"
                />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" type="submit">
                Settle Up
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      );
}

export default AddSettlement;