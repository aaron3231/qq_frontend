import React, {useState, useEffect} from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, Tab, Modal, ToggleButton, Form, ToggleButtonGroup } from 'react-bootstrap';

const AddPayment = (props) => {

    // const [date, setDate] = useState(new Date());
    
    // const handleCalendarClose = () => console.log("Calendar closed");
    // const handleCalendarOpen = () => console.log("Calendar opened");

    const [value, setValue] = useState([1, 3]);

    const handleChange = (val) => setValue(val);
      
        // return (
        //   <DatePicker
        //     selected={date}
        //     onChange={(date) => setDate(date)}
        //     onCalendarClose={handleCalendarClose}
        //     onCalendarOpen={handleCalendarOpen}
        //   />
        // );

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
          <Modal.Body>
          <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="description"
                            autoFocus
                            required
                        />
                    </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Debtor</Form.Label>
                    <Form.Control rows={3} >
                        {/* <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                            <ToggleButton id="tbg-btn-1" value={1}>
                            User 1
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={2}>
                            Option 2
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={3}>
                            Option 3
                            </ToggleButton>
                        </ToggleButtonGroup>  */}
                    </Form.Control>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
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

export default AddPayment;