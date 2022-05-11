import React, {useState, useEffect} from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab, Modal, ToggleButton, Form, ToggleButtonGroup } from 'react-bootstrap';

const AddSettlement = (props) => {

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
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
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