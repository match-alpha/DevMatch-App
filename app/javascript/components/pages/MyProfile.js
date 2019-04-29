import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Nav,
  Navbar,
  Logo,
  NavLogo,
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

  handleDelete = profile => {
    return fetch(BASE + `/profiles/${profile.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        let json = resp.json();
        return json;
      })
      .then(destoryProfile => {
        this.setState({
          profiles: destoryProfile
        });
      })
      .catch(e => alert(e));
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        {user && (
          <div>
            <Navbar bg="primary" variant="dark" sticky="top">
              <Navbar.Brand img="true" img src={Logo} href="#home">
                <img
                  src={NavLogo}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#mission">Home</Nav.Link>
                <Nav.Link href="#tech">Network</Nav.Link>
                <Nav.Link href="#about">Profile</Nav.Link>
              </Nav>
            </Navbar>
            <div className="jumbotron">
              <div>
                <h1 className="name">
                  {user.first_name} {user.last_name}
                </h1>
              </div>
              <div>
                <h3 className="github">{user.profile.github}</h3>
              </div>
              <div>
                <h3 className="linkedin"> {user.profile.linkedin}</h3>
              </div>
              <div className="location">
                {user.profile.city}, {user.profile.state}
              </div>
              <hr className="my-4" />
              <h3>{user.profile.user_type} User type goes there</h3>
            </div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="skill" title="Skills">
                {user.skills.map((skill, index) => {
                  return (
                    <div key={index}>
                      {skill.language} {skill.framework}
                      <EditSkill skill={skill} />
                    </div>
                  );
                })}
                <CreateSkill />
              </Tab>
              <Tab eventKey="about_me" title="About Me">
                <EditProfile profile={this.props.profile} />
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <div>{user.email}</div>
                <div>{user.profile.instagram}</div>
                <div>{user.profile.twitter}</div>
              </Tab>
            </Tabs>
            {user.user_type}
            <div>{user.profile.experience} </div>
            <div>{user.profile.education}</div>
            <div>{user.profile.about_me}</div>
          </div>
        )}
      </div>
    );
  }
}

export default MyProfile;
