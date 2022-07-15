import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoHome } from "react-icons/io5";

export function Navegation() {

  return React.createElement(
    Navbar,
    { collapseOnSelect: true, expand: "lg", className: "Navegation", variant: "dark" },
    React.createElement(
      Container,
      null,
      React.createElement(
        Navbar.Brand,
        { href: "/" },
        React.createElement(
          IconContext.Provider,
          { value: { className: "Icon", title: "Home" } },
          React.createElement(
            "div",
            null,
            React.createElement(IoHome, null)
          )
        )
      ),
      React.createElement(Navbar.Toggle, { "aria-controls": "responsive-navbar-nav" }),
      React.createElement(
        Navbar.Collapse,
        { id: "responsive-navbar-nav" },
        React.createElement(
          Nav,
          { className: "me-auto" },
          React.createElement(
            Nav.Link,
            { href: "#features" },
            "Features"
          ),
          React.createElement(
            Nav.Link,
            { href: "#pricing" },
            "Pricing"
          ),
          React.createElement(
            NavDropdown,
            { title: "Dropdown", id: "collasible-nav-dropdown" },
            React.createElement(
              NavDropdown.Item,
              { href: "#action/3.1" },
              "Action"
            ),
            React.createElement(
              NavDropdown.Item,
              { href: "#action/3.2" },
              "Another action"
            ),
            React.createElement(
              NavDropdown.Item,
              { href: "#action/3.3" },
              "Something"
            ),
            React.createElement(NavDropdown.Divider, null),
            React.createElement(
              NavDropdown.Item,
              { href: "#action/3.4" },
              "Separated link"
            )
          )
        ),
        React.createElement(
          Nav,
          null,
          React.createElement(
            Nav.Link,
            { href: "#deets" },
            "More deets"
          ),
          React.createElement(
            Form,
            { className: "d-flex" },
            React.createElement(Form.Control, {
              type: "search",
              placeholder: "Search",
              className: "me-2",
              "aria-label": "Search"
            }),
            React.createElement(
              Button,
              { className: "searchButton" },
              "Buscar"
            )
          )
        )
      )
    )
  );
}