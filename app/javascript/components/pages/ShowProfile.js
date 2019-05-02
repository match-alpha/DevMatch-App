import React from "react";
import PropTypes from "prop-types";
// import { Button, Modal } from 'react-bootstrap'

import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'



class ShowProfile extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        open: false
      }
    }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })


render() {
  const { open, dimmer } = this.state
  let { user, skill, profile} = this.props
  return (

    <div>
    <Button onClick={this.show(true)} color='black'>View Profile</Button>

    <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{user.first_name} {user.last_name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
            <Header className='user-type'>{user.user_type}</Header>
            <h4>
                <div className='user-skill'> {skill.language} || {skill.framework}</div>
                <div className='user-email'>Email: {user.email}</div>
                    <br />
                        <span>
                       {user.profile &&
                         <div>
                         {user.profile.city}, {user.profile.state}
                         <br />
                         <br />
                         Education: {user.profile.education}
                         <br />
                         <br />
                         Experience: {user.profile.experience}
                        <br />
                        <br />
                        About Me: {user.profile.about_me}
                         </div>
                       }
                       </span>
                </h4>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button color='black' >
            <a href="mailto:?Subject=Hello%20again" target="_top">Send Mail</a>
          </Button>
          <Button color='black' onClick={this.close}>
            Close
            </Button>
    </Modal.Actions>
  </Modal>
  </div>
  );
}
}

export default ShowProfile
