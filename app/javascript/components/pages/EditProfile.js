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

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   responseOK: false,
      user: null,

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

  handleSubmit = profile => {
    event.preventDefault();
    console.log(this.props);
    fetch(`/profiles/${this.props.profile}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.form)
    })
      .then(response => response.json())

      .then(json => {
        console.log(json);
        this.setState({ profile: json });
      });
    //   .then(response => {
    //     this.setState({ responseOk: true });
    //   });
  };

  handleChange = event => {
    const { form } = this.state;
    console.log(event.target);
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };

  render() {
    const { responseOk, form, profile } = this.state;
    return (
      <div>
        {/* {profile && <Redirect to="/profile" />} */}
        <h1>Add aProfile </h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              s={12}
              name="education"
              label="education"
              value={this.state.form.education}
            />

            <input
              onChange={this.handleChange}
              s={12}
              name="experience"
              label="experience"
              value={this.state.form.experience}
            />
            <label>City</label>
            <input
              onChange={this.handleChange}
              s={4}
              name="city"
              label="City"
              value={this.state.form.city}
            />
            <input
              onChange={this.handleChange}
              s={4}
              name="state"
              label="State"
              value={this.state.form.state}
            />
            <input
              onChange={this.handleChange}
              s={4}
              name="github"
              label="Github"
              value={this.state.form.github}
            />
            <input
              onChange={this.handleChange}
              s={6}
              name="linkedin"
              label="Linkedin"
              value={this.state.form.linkedin}
            />
            <input
              onChange={this.handleChange}
              s={6}
              name="twitter"
              label="Twitter"
              value={this.state.form.twitter}
            />
            <input
              onChange={this.handleChange}
              s={6}
              name="instagram"
              label="Instagram"
              value={this.state.form.instagram}
            />
            <label> About me</label>
            <input
              onChange={this.handleChange}
              s={6}
              name="about_me"
              label="About me"
              value={this.state.form.about_me}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
