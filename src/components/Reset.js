import React from 'react'
import {Container, Button, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';
import './component.css'

function Reset() {
    const [showOn, setShow] = useState(false);
    const [showOff, setShowOff] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
      <Container className="switch">
        <Button className="btn_on" variant="primary" onClick={handleShow}>
          Reset
        </Button>
        <Modal show={showOn} onHide={handleClose} >
          <Modal.Header>
            <Modal.Title>Robot reseted seccesfully!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <p>It can takes some time...</p> 
           </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
             Close
            </Button>
          </Modal.Footer>         
        </Modal> 
          <Form.Group className="checkbox-as">
            {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label={` Use safety limit check `}
                />
            </div>
            ))}
        </Form.Group> 
      </Container>
      </>
    );
  }
  
  export default Reset;