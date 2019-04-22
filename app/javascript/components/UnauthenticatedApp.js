import React from "react"
import PropTypes from "prop-types"
import Homepage from "./pages/Homepage"
import { Nav, Navbar, Form, NavDropdown, FormControl, Button, Container, Jumbotron, Row, Col, Image } from "react-bootstrap"
import Logo from "./images/Logo.png"





class UnauthenticatedApp extends React.Component {
  render () {
    return (

        <div>
          <Navbar bg="primary" variant="dark" sticky="top" >
            <Navbar.Brand href="#home">DevMatch</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Mission</Nav.Link>
              <Nav.Link href="#features">Our Tech Stack</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
          </Navbar>

          <Jumbotron id="landingpage" fluid className="text-xs-center">
            <Container>
            <center>
              <img src={Logo} alt="Logo" />
              <p>
                Where developers come to teach and learn
              </p>
              <Button color="primary">Sign Up</Button>
              </center>
            </Container>
          </Jumbotron>

          <Jumbotron id="mission" fluid className="text-xs-center">
            <Container>
            <center>
              <h1> Our Mission </h1>
              <p> DevMatch is an app designed to connect current and aspiring software engineers seeking to improve their skills in a certain area with mentors who have real-world experience and are willing to share their knowledge. By allowing users to post their availability and seek out mentors by skill set, DevMatch is aiming to make the way we learn and teach a more open and communal experience. </p>
              </center>
            </Container>
          </Jumbotron>

          <Jumbotron id="tech" fluid className="text-xs-center">
            <Container>
            <center>
              <h1> Tech Stack </h1>
              <p> What we used to build this application</p>
                <div className="icon">
                  <i className="devicon-html5-plain-wordmark" ></i>
                  <i className="devicon-css3-plain-wordmark"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-ruby-plain-wordmark"></i>
                  <i className="devicon-react-original-wordmark"></i>
                  <i className="devicon-rails-plain-wordmark"></i>
                  <i className="devicon-postgresql-plain-wordmark"></i>
                </div>


              </center>
            </Container>
          </Jumbotron>

          <Jumbotron id="about" fluid className="text-xs-center">
            <Container>
            <center>
              <h1> About Us</h1>
              <p> DevMatch is an app designed to connect current and aspiring software engineers seeking to improve their skills in a certain area with mentors who have real-world experience and are willing to share their knowledge. By allowing users to post their availability and seek out mentors by skill set, DevMatch is aiming to make the way we learn and teach a more open and communal experience. </p>
              </center>

            </Container>
          </Jumbotron>

          <div>

          </div>

        </div>


    );
  }
}

export default UnauthenticatedApp
