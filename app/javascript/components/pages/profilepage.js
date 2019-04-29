import React from "react";
import PropTypes from "prop-types";
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
  Tabs,
  Sonnet
} from "react-bootstrap";

class Profilepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseOk: false,
      user_id: "",
      user_type: "",
      education: "",
      experience: "",
      about_me: "",
      city: "",
      state: "",
      github: "",
      linkedin: "",
      twitter: "",
      instagram: ""
    };
    this.handleUseridChange;
    this.handleUsertypeChange;
    this.handleEducationChange;
    this.handleExperienceChange;
    this.handleAboutmeChange;
    this.handleCityChange;
    this.handleStateChange;
    this.handleGithubChange;
    this.handleLinkedinChange;
    this.handleTwitterChange;
    this.handleInstagramChange;
  }

  handleUseridChange = e => {
    console.log(e.target);
    console.log(user_id);
    this.setState({ user_id: e.target.value });
  };

  handleUsertypeChange = e => {
    console.log(e.target);
    console.log(user_type);
    this.setState({ user_type: e.target.value });
  };

  handleEducationChange = e => {
    console.log(e.target);
    this.setState({ education: e.target.value });
  };

  handleExperienceChange = e => {
    console.log(e.target);
    this.setState({ experience: e.target.value });
  };

  handleAboutmeChange = e => {
    console.log(e.target);
    this.setState({ about_me: e.target.value });
  };

  handleCityChange = e => {
    console.log(e.target);
    this.setState({ city: e.target.value });
  };

  handleStateChange = e => {
    console.log(e.target);
    this.setState({ state: e.target.value });
  };

  handleGithubChange = e => {
    console.log(e.target);
    this.setState({ github: e.target.value });
  };

  handleLinkedinChange = e => {
    console.log(e.target);
    this.setState({ linkedin: e.target.value });
  };

  handleTwitterChange = e => {
    console.log(e.target);
    this.setState({ twitter: e.target.value });
  };

  handleInstagramChange = e => {
    console.log(e.target);
    this.setState({ instagram: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 className="text-left"> create profile </h1>
            <p className="text-left">
              {" "}
              The first step to connect to other software enigneers{" "}
            </p>
          </div>
        </div>

        <div className="location">
          <label> City </label>
          <input
            type="text"
            name="profile[city]"
            value={this.state.city}
            onChange={this.handleCityChange}
          />
        </div>

        <div>
          <label> State </label>
          <input
            type="text"
            name="profile[state]"
            value={this.state.state}
            onChange={this.handleStateChange}
          />
        </div>

        <label> Education </label>
        <input
          type="text"
          name="profile[education]"
          value={this.state.education}
          onChange={this.handleEducationChange}
        />

        <label> Experience </label>
        <input
          type="text"
          name="profile[experience]"
          value={this.state.experience}
          onChange={this.handleExperienceChange}
        />

        <label> Github</label>
        <input
          type="text"
          name="profile[github]"
          value={this.state.github}
          onChange={this.handleGithubChange}
        />

        <label> Linkedin</label>
        <input
          type="text"
          name="profile[linkedin]"
          value={this.state.linkedin}
          onChange={this.handleLinkedinChange}
        />

        <label> Twitter</label>
        <input
          type="text"
          name="profile[twitter]"
          value={this.state.twitter}
          onChange={this.handleTwitterChange}
        />

        <label> Instagram</label>
        <input
          type="text"
          name="profile[instagram]"
          value={this.state.instagram}
          onChange={this.handleInstagramChange}
        />

        <label> About Me </label>
        <textarea
          className="aboutme"
          name="profile[about_me]"
          value={this.state.about_me}
          onChange={this.handleAboutmeChange}
        />
      </div>
    );
  }
}

export default Profilepage;
