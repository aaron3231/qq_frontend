import React, {useState, useEffect} from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab, Modal, ToggleButton, Form, ToggleButtonGroup } from 'react-bootstrap';
import Select from 'react-select'

const AddSettlement = (props) => {

    const members = [
      { label: "UserA ", value: "grapes" },
      { label: "UserB ", value: "mango" },
    ];
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
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Settler</Form.Label>
                <Select options={members} />
                </Form.Group>
                <Form.Label>Amount</Form.Label>
                  <Form.Control
                          type="text"
                          placeholder="amount"
                          autoFocus
                          required
                      />
                <Form.Label>Date</Form.Label>
                      <Form.Control
                                type="date"
                                autoFocus
                                required
                      />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={props.onHide}>Close</Button> */}
            <Button variant="secondary" onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={props.onHide}>
                Send
            </Button>
          </Modal.Footer>
        </Modal>
      );
}

export default AddSettlement;