import React, { useState } from "react";
import { Form } from "react-bootstrap";

const RadioBtn = () => {
    const [item, setItem] = useState({ kindOfStand: "", another: "another" });
    const { kindOfStand } = item;
  
    const handleChange = e => {
      e.persist();
      console.log(e.target.value);

      setItem(prevState => ({
        ...prevState,
        kindOfStand: e.target.value
      }));
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      alert(`${kindOfStand}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Form.Group className="tool_power" controlId="kindOfStand">
          <Form.Check
            value="0V"
            type="radio"
            aria-label="radio 1"
            label="0 V"
            onChange={handleChange}
            checked={kindOfStand === "0V"}
          />
          <Form.Check
            value="12V"
            type="radio"
            aria-label="radio 2"
            label="12 V"
            onChange={handleChange}
            checked={kindOfStand === "12V"}
          />
          <Form.Check
            value="24V"
            type="radio"
            aria-label="radio 2"
            label="24 V"
            onChange={handleChange}
            checked={kindOfStand === "24V"}
          />
        </Form.Group>
      </form>
    );
  };
  
export default RadioBtn;