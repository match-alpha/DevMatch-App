import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import {
  Nav,
  Navbar,
  Logo,
  NavLogo,
  Form,
  NavDropdown,
  FormControl,
  Container,
  Jumbotron,
  Button,
  Col,
  Image,
  Tab,
  Tabs
} from "react-bootstrap";

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseOK: false,
      form: {
        education: "",
        experience: "",
        about_me: "",
        city: "",
        state: "",
        github: "",
        linkedin: "",
        twitter: "",
        instagram: ""
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`/profiles.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.form)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ profile: json });
      });

    // .then(response => {
    //   this.setState({ responseOk: true });
    // });
  };

  handleChange = event => {
    const { form } = this.state;
    console.log();
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };

  render() {
    const { responseOk } = this.state;
    return (
      <div>
        {responseOk && <Redirect to="/profile" />}
        <h1>Add a Profile</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              s={12}
              name="user_type"
              label="User Type"
            />
            <input
              onChange={this.handleChange}
              s={12}
              name="education"
              label="Address 1"
            />
            <input
              onChange={this.handleChange}
              s={12}
              name="experience"
              label="Address 2"
            />
            <input
              onChange={this.handleChange}
              s={4}
              name="city"
              label="City"
            />
            <input
              onChange={this.handleChange}
              s={4}
              name="state"
              label="State"
            />
            <input
              onChange={this.handleChange}
              s={4}
              name="github"
              label="Github"
            />
            <input
              onChange={this.handleChange}
              s={6}
              name="linkedin"
              label="Linkedin"
            />
            <input
              onChange={this.handleChange}
              s={6}
              name="twitter"
              label="Twitter"
            />
            <input
              onChange={this.handleChange}
              s={6}
              name="instagram"
              label="Instagram"
            />
            <textarea
              onChange={this.handleChange}
              s={6}
              name="about_me"
              label="About me"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProfile;
