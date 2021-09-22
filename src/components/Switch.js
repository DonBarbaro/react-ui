import React from 'react'
import {Container, Row, Col, Button, ToggleButtonGroup, ToggleButton, Alert, Modal} from 'react-bootstrap';
import { useState } from 'react';

import './component.css';

function PowerButton() {
    const [showOn, setShow] = useState(false);
    const [showOff, setShowOff] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
      <Container className="switch">
         <Button className="btn_on" variant="secondary" onClick={handleShow}>
          On
        </Button>
  
        <Modal show={showOn} onHide={handleClose} >
          <Modal.Header>
            <Modal.Title>Robot start seccesfully!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <p>For more informaltion check datasheet!</p> 
           </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>         
        </Modal> 
        <Alert show={showOff} variant="danger">
        <Alert.Heading>Stoping process...</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowOff(false)} variant="danger">
            Close
          </Button>
        </div>
      </Alert>

      {!showOff && <Button className="btn_off" variant="secondary" onClick={() => setShowOff(true)}>Off</Button>}
      </Container>
      </>
    );
  }
  
  export default PowerButton;