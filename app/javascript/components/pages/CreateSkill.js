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
  Tabs,
  Modal
} from "react-bootstrap";

class CreateSkill extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,

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
    window.location.reload();
  };

  handleChange = event => {
    const { form } = this.state;
    console.log();
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { responseOk } = this.state;
    return (
      <div>
        {/* {responseOk && <Redirect to="/profile" />} */}
        <div>
          <>
          <br />
            <Button variant="primary" onClick={this.handleShow}>
              Add Skill
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <form onSubmit={this.handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <label>Language</label>
                  <input
                    onChange={this.handleChange}
                    s={12}
                    name="language"
                    label="language"
                  />
                  <label>Framework</label>
                  <input
                    onChange={this.handleChange}
                    s={12}
                    name="framework"
                    label="framework"
                  />
                </Modal.Body>
                <Modal.Footer />
                <Button type="submit">Submit</Button>
              </form>
            </Modal>
          </>
        </div>
      </div>
    );
  }
}

export default CreateSkill;
