/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import { Container, Nav, Navbar,NavDropdown } from 'react-bootstrap';

class TopNavigation extends Component {
  render() {
    return (
      <>
        <Navbar fixed = "top" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                    <Navbar.Brand href="#home">Shakil khan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">Services</Nav.Link>
                        <Nav.Link href="#deets">Courses</Nav.Link>
                        <Nav.Link href="#deets">Protfolio</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link href="#deets">About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}

export default TopNavigation;

