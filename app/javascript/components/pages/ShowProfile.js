import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, Image } from 'react-bootstrap'
import ActiveStorageProvider from 'react-activestorage-provider';
class ShowProfile extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
render() {
  let { user, skill, profile} = this.props
  return (
    <div>
      <Button variant="primary" onClick={this.handleShow}>
        View Profile
      </Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      <Image wrapped size="medium" id="cardimage" src={user.avatar_url} />
      <br />
      <div className = "working">
        <Modal.Title className='user-name'>
        {user.first_name} {user.last_name}
        <br />
        {user.user_type}
        <br/>
        {skill.language} || {skill.framework}
        <br />
        {user.email}
        <br />
        {user.profile &&
          <div>
          {user.profile.city}, {user.profile.state}
          </div>
        }
      </Modal.Title>
      </div>
      </Modal.Header>
      <Modal.Body>
        <h4>
          <span>
            {user.profile &&
          <div>
                Education
                <br />
                <br />
                {user.profile.education}
              <br />
              <br />
                Experience
                <br/>
                <br/>
                {user.profile.experience}
              <br />
              <br />
                About Me
                <br />
                <br />
                {user.profile.about_me}
              </div>
            }
             </span>
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button color='teal' >
          <a href="mailto:?Subject=Hello%20again" target="_top">Send Mail</a>
        </Button>
          <Button color='black' onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}
export default ShowProfile
