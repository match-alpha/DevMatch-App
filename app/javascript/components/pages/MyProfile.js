import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
  Image,
  Tab,
  Tabs
} from "react-bootstrap";

import EditProfile from "./EditProfile";
import CreateSkill from "./CreateSkill";
import EditSkill from "./EditSkill";
import User from "../avatar.js";
import Logo from "../images/Logo.png";
import NavLogo from "../images/NavbarLogo.png";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    //talk to the end point to get all dvds
    fetch(`/users/${this.props.current_user.id}.json`)
      //when promise is fufilled parse to json
      .then(response => response.json())
      //then set state of dvds to the json payload
      .then(json => {
        console.log(json);
        this.setState({ user: json });
      })
      .catch(e => {
        console.log("Error", e);
      });
  }

  handleDelete = skill => {
    return fetch(`/skills/${skill.id}`, {
      method: "DELETE"
    })
      .then(destorySkill => {
        this.setState({
          skill: destorySkill
        });
      })

      .catch(e => alert(e));
  };

  handleDeleted = profile => {
    return fetch(`/profiles/${this.props.profile}`, {
      method: "DELETE"
    })
      .then(destoryProfile => {
        this.setState({
          profile: destoryProfile
        });
      })
      .catch(e => alert(e));
  };

  render() {
    const { user, handleDelete } = this.state;

    return (
      <div>
        {user && (
          <div>
            <Router>
              <Navbar bg="primary" variant="dark" sticky="top">
                <Navbar.Brand img="true" img src={Logo}>
                  <img
                    src={NavLogo}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/network">Network</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
              </Navbar>
            </Router>
            <div className="jumbotron">
              <div>
                <div className="avatarz">
                  <User user={this.props.current_user} />
                </div>
                <div className="description">
                  <div>
                    <h2 className="name">
                      {user.first_name} {user.last_name}
                    </h2>
                  </div>
                  <div>
                    <h3 className="github">Github: {user.profile.github}</h3>
                  </div>

                  <div>
                    <h3> Email: {user.email}</h3>
                  </div>

                  <div className="location">
                    <h3>
                      Location: {user.profile.city}, {user.profile.state}
                    </h3>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h3>{user.user_type}</h3>
              <EditProfile profile={this.props.profile} />
            </div>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="skill" title="Skills">
                {user.skills.map((skill, index) => {
                  return (
                    <div key={index}>
                      <div className="language">
                        <h2> Language</h2>
                        <h3>{skill.language}</h3>
                      </div>
                      <div className="framework">
                        <h2> Framework</h2>
                        <h3>{skill.framework}</h3>
                      </div>

                      <EditSkill skill={skill} />
                      <Button
                        className=""
                        id="submit"
                        onClick={() => this.handleDelete(skill)}
                        type="button"
                      >
                        Delete Skill
                      </Button>
                    </div>
                  );
                })}
                <CreateSkill />
              </Tab>
              <Tab eventKey="about_me" title="About Me">
                <h3>{user.profile.about_me}</h3>
              </Tab>

              <Tab eventKey="Experience" title="Experience/ Education">
                <h3>
                  {user.first_name} attended {user.profile.education}
                </h3>
                <h3>
                  {" "}
                  Has Programing experience at {user.profile.experience}{" "}
                </h3>
              </Tab>

              <Tab eventKey="contact" title="Contact">
                <h3> For more contact:</h3>

                <h3 className="linkedin"> Linkedin: {user.profile.linkedin}</h3>
                <h3>Instagram:{user.profile.instagram}</h3>
                <h3>Twitter: {user.profile.twitter}</h3>
              </Tab>
            </Tabs>
          </div>
        )}
      </div>
    );
  }
}

export default MyProfile;
