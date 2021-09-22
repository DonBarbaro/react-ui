import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";

function Select() {
    const [type, setType] = useState('');

  
    return (
      
        <Form.Group controlId="formBasicSelect">
            <Form.Label>
                Load Robot Configuration 
            </Form.Label>
                <Form.Control
                    as="select"
                    value={type}
                    onChange={e => {
                        console.log(e.target.value);
                        setType(e.target.value);
                    }}
                >
                    <option>Please select a setting file</option>
                    <option value="Setting file 1">Setting file 1</option>
                    <option value="Setting file 2">Setting file 2</option>
                    <option value="Setting file 3">Setting file 3</option>
                </Form.Control>
      </Form.Group>
      
    );
  }


export default Select;