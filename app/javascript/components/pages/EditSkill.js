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

class EditSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   responseOK: false,
      user: null,

      form: {
        language: "",
        framework: ""
      }
    };
  }

  handleSubmit = skill => {
    event.preventDefault();
    console.log(this.props);
    fetch(`/skills/${this.props.skill.id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.form)
    })
      .then(response => response.json())

      .then(json => {
        console.log(json);
        this.setState({ skill: json });
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
    return (
      <div>
        {/* {profile && <Redirect to="/profile" />} */}
        <h1> Edit Skill</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              s={12}
              name="language"
              label="language"
              value={this.state.form.language}
            />

            <input
              onChange={this.handleChange}
              s={12}
              name="framework"
              label="framework"
              value={this.state.form.framework}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditSkill;
