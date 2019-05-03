import React from "react";
import PropTypes from "prop-types";
import Homepage from "./pages/Homepage";
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Button,
  Container,
  Jumbotron,
  Row,
  Col,
  Image
} from "react-bootstrap";
import Logo from "./images/Logo.png";
import NavLogo from "./images/NavbarLogo.png";
import Profile from "./images/Profilebw.png";
import Melkam from "./images/m.png";
import Jerrod from "./images/jerrod.png";
import Dante from "./images/dante.png";
import { HashLink as Link } from "react-router-hash-link";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -85 });

class UnauthenticatedApp extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" sticky="top">
          <Navbar.Brand img src={Logo} href="#home">
            <img
              id="navlogo"
              src={NavLogo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#tech">Tech Stack</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            

          </Nav>
        </Navbar>

        <Jumbotron
          href="#home"
          id="landingpage"
          fluid
          className="text-xs-center"
        >
          <Container>
            <center>
              <div>
                <img src={Logo} alt="Logo" />
              </div>
              <p>Where developers come to teach and learn</p>

              <div id="front">
                <a href="/users/sign_up">
                  <Button color="primary">Sign Up</Button>
                </a>

                <a href="/users/sign_in">
                  <Button color="primary">Log In</Button>
                </a>
              </div>
            </center>
          </Container>
        </Jumbotron>
        <div>
          <ScrollableAnchor id={"mission"}>
            <Jumbotron
              id="mission"
              href="#mission"
              fluid
              className="text-xs-center"
            >
              <Container>
                <center>
                  <h1> Our Mission </h1>
                  <p>
                    {" "}
                    DevMatch is an app designed to connect current and aspiring
                    software engineers seeking to improve their skills in a
                    certain area with mentors who have real-world experience and
                    are willing to share their knowledge. By allowing users to
                    post their availability and seek out mentors by skill set,
                    DevMatch is aiming to make the way we learn and teach a more
                    open and communal experience.{" "}
                  </p>
                </center>
              </Container>
            </Jumbotron>
          </ScrollableAnchor>
        </div>
        <ScrollableAnchor id={"tech"}>
          <Jumbotron id="tech" fluid className="text-xs-center">
            <Container>
              <center>
                <h1> Tech Stack </h1>
                <p> What we used to build this application</p>
                <div className="icon">
                  <i className="devicon-html5-plain-wordmark" />
                  <i className="devicon-css3-plain-wordmark" />
                  <i className="devicon-javascript-plain" />
                  <i className="devicon-ruby-plain-wordmark" />
                  <i className="devicon-react-original-wordmark" />
                  <i className="devicon-rails-plain-wordmark" />
                  <i className="devicon-postgresql-plain-wordmark" />
                </div>
              </center>
            </Container>
          </Jumbotron>
        </ScrollableAnchor>

        <ScrollableAnchor id={"about"}>
          <Jumbotron id="about" fluid className="text-xs-center">
            <Container>
              <center>
                <h1> About Us</h1>
                <p>
                  {" "}
                  DevMatch is an app designed to connect current and aspiring
                  software engineers seeking to improve their skills in a
                  certain area with mentors who have real-world experience and
                  are willing to share their knowledge. By allowing users to
                  post their availability and seek out mentors by skill set,
                  DevMatch is aiming to make the way we learn and teach a more
                  open and communal experience.{" "}
                </p>
              </center>
              <Container>
                <Row>
                  <Col xs={6} md={3}>
                    <center>
                      <Image src={Profile} roundedCircle />

                      <h2>Elshaday</h2>
                    </center>
                  </Col>
                  <Col xs={6} md={3}>
                    <center>
                      <Image src={Melkam} roundedCircle />
                      <h2>Melkam</h2>
                    </center>
                  </Col>
                  <Col xs={6} md={3}>
                    <center>
                      <Image src={Jerrod} roundedCircle />
                      <h2>Jerrod</h2>
                    </center>
                  </Col>
                  <Col xs={6} md={3}>
                    <center>
                      <Image src={Dante} roundedCircle />
                      <h2>Dante</h2>
                    </center>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Jumbotron>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default UnauthenticatedApp;
