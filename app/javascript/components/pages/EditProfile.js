import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import {
 
  Button,
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

  render() {
    const { responseOk, form, profile } = this.state;
    return (
      <div>
        {/* {profile && <Redirect to="/profile" />} */}

        <div>
          <>
            <button type="button" class="btn btn-info" onClick={this.handleShow}>
              Edit Profile
            </button>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <form onSubmit={this.handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <label> Education</label>
                  <input
                    onChange={this.handleChange}
                    s={12}
                    name="education"
                    label="education"
                    value={this.state.form.education}
                  />
                  <label>Experience</label>
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
                  <label>State</label>
                  <input
                    onChange={this.handleChange}
                    s={4}
                    name="state"
                    label="State"
                    value={this.state.form.state}
                  />
                  <label>Github</label>
                  <input
                    onChange={this.handleChange}
                    s={4}
                    name="github"
                    label="Github"
                    value={this.state.form.github}
                  />
                  <label>Linkedin</label>
                  <input
                    onChange={this.handleChange}
                    s={6}
                    name="linkedin"
                    label="Linkedin"
                    value={this.state.form.linkedin}
                  />
                  <label>Twitter</label>
                  <input
                    onChange={this.handleChange}
                    s={6}
                    name="twitter"
                    label="Twitter"
                    value={this.state.form.twitter}
                  />
                  <label>Instagram</label>
                  <input
                    onChange={this.handleChange}
                    s={6}
                    name="instagram"
                    label="Instagram"
                    value={this.state.form.instagram}
                  />
                  <label> About me</label>
                  <textarea
                    onChange={this.handleChange}
                    s={6}
                    name="about_me"
                    label="About me"
                    value={this.state.form.about_me}
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
