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

class CreateSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // responseOK: false,
      form: {
        language: "",
        framework: ""
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`/skills.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.form)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ skill: json });
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
        <h1>Add a skill</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              s={12}
              name="language"
              label="language"
            />
            <input
              onChange={this.handleChange}
              s={12}
              name="framework"
              label="framework"
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateSkill;
