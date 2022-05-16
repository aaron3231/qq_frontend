import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import Select from 'react-select'

const AddPayment = (props) => {

    var members = []
    props.members.forEach(element => {
      members.push({label: element.name, value: element.id})
    }); 
    
    let addPayment = (event) => {
      event.preventDefault();
      try {
          var debtors = []
          event.target.debtor.forEach(item => {
            debtors.push(item.value)
          })
          let note = event.target.note.value
          if (note === null)
              note = ''
          fetch('/ezmiro/ezmiro/payment/create?groupId='+ props.groupid,
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                payerId: event.target.payer.value,
                amount: event.target.amount.value,
                debtorId: debtors,
                description: event.target.description.value,
                note: note,
                date: event.target.date.value
              })
          });
          props.onHide()
          // const result = res.json();
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
              Add Payment
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={addPayment}>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Payer</Form.Label>
                      <Select options={members} name="payer" required/>
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
                      required
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