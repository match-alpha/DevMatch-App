import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, Form, NavDropdown, FormControl, Button, Container, Jumbotron, Row, Col, Image } from "react-bootstrap"
import Logo from "./images/Logo.png"
import NavLogo from "./images/NavbarLogo.png"
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'


configureAnchors ({offset: 0})

class NavbarExport extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <Navbar bg="primary" variant="dark" sticky="top" >
            <Navbar.Brand img src={Logo} href="http://localhost:3000">
              <img src = {NavLogo} className="d-inline-block align-top" alt="React Bootstrap logo"/>
            </Navbar.Brand>
          </Navbar>
        </div>
      </React.Fragment>


    );
  }
}

export default NavbarExport
