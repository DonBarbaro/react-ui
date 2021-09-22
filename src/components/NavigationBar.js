import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #ffffff; border-style:groove; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #15cbf9;
    &:hover { color: grey; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #15cbf9;
    &:hover { color: grey; }
  }
  .form-center {
    position: absolute !important;
    left: 100%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="sm">
      <Navbar.Brand href="/">spinbotics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-center sm-4">
          <Nav.Item><Nav.Link href="/">Personal</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)