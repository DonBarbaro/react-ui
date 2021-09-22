import React  from 'react';
import { Component } from 'react'
import {Image, Container, Row, Col, Button, Card} from 'react-bootstrap';
import * as GiIcons from 'react-icons/gi';
import PowerButton from '../components/Switch'
import Toogle from '../components/Tab'



export class robot_operation extends Component {
  
render() {
    return (
      <div>
        <Container fluid className="robot_operation_main">
          <Row className="container-fluid">
            <Col xs lg="6">
              <Row className="Control">
                <p className="robocop"><GiIcons.GiRobotGrab/> Robot Status </p>
              </Row>
              <Row fluid="md">
                <PowerButton/>
              </Row>
              <Row fluid="md">
                <img className="robot" src="/robot.png"  alt=""/>
              </Row>
              <Row fluid="md">
                {/* tu ide autoplay */}
                
              </Row>
            </Col>
              <Col xs lg="6">
              <Row className="toogle_bar">
                <Toogle/>
              </Row>
            </Col>
          </Row>
        </Container>
       
      </div>
    )
  }
}

