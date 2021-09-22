import React from 'react';
import {Container, Row, Tab, Tabs, Card, Form} from 'react-bootstrap';
import './component.css';
import Reset from '../components/Reset'
import Select from './Select';
import RadioBtn from './RadioBtn';
 
function Toogle() {
  return (
    <Container className="Toogle" >
      <Tabs className="both_tabs" defaultActiveKey="second">
        <Tab className="monitoring" eventKey="first" title="Monitoring">
          <h1> Monitoring</h1>
        </Tab>
        <Tab eventKey="second" title="Operation Setting">
          <Container>
            <Row>
              <Reset/>      {/*  funkcia na reset a checkbox  */}
            </Row>
            <Row>
            <Container className="card_robot_settings">
              <Card>
              <Card.Header>
                Robot Setting
              </Card.Header>
                <Card.Body>
                  <Card.Text>
                      Payload:
                  </Card.Text>
                </Card.Body>
                <span className="border-bottom"></span>
                <Card.Body>
                    <Select/>     {/*  vola sa funkcia Na selectovanie  */}
                </Card.Body>
            </Card>
            </Container>
            </Row>
            <Row>
            <Container className="card_tool_power">
              <Card >
              <Card.Header>
                Tool Power
              </Card.Header>
                <Card.Body>
                  <Card.Text>
                      Voltage
                      <RadioBtn/>
                  </Card.Text>
                </Card.Body>
            </Card>
            </Container>
            
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
}
export default Toogle;