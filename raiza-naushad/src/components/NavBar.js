import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

export const NavBar = () => {
    return(
        <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">RAIZA NAUSHAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
