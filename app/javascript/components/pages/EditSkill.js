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

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      //   responseOK: false,
      user: null,
      show: false,
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
    window.location.reload();
  };

  handleChange = event => {
    const { form } = this.state;
    console.log(event.target);
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };
  handleClose() {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { responseOk, form, profile } = this.state;
    return (
      <div>
        {/* {profile && <Redirect to="/profile" />} */}
        <div>
          <>
            <button type="button" class="btn btn-info" onClick={this.handleShow}>
              Edit Skill
            </button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <form onSubmit={this.handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Skill</Modal.Title>
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

export default EditProfile;
