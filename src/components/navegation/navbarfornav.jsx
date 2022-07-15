import React from "react";
import {Container, Nav, Navbar, NavDropdown, Form, Button} from "react-bootstrap";
import { IconContext } from "react-icons";
import {IoHome} from "react-icons/io5"

export function Navegation () {

    return(
        <Navbar collapseOnSelect expand="lg" className="Navegation" variant="dark">
      <Container>
        <Navbar.Brand href="/"><IconContext.Provider value={{className:"Icon", title:"Home"}}><div><IoHome/></div></IconContext.Provider></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="searchButton">Buscar</Button>
                </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


