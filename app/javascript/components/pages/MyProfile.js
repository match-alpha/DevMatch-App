import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    //talk to the end point to get all dvds
    fetch(`/users/${this.props.current_user.id}.json`)
      //when promise is fufilled parse to json
      .then(response => response.json())
      //then set state of dvds to the json payload
      .then(json => {
        console.log(json);
        this.setState({ user: json });
      })
      .catch(e => {
        console.log("Error", e);
      });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        {user && (
          <div>
            <h1>hello</h1>
            {user.first_name}
            {user.last_name}
            {user.user_type}
            {user.profile.city}
            {user.profile.state}
            {user.profile.experience}
            {user.profile.education}
            {user.profile.github}
            {user.profile.linkedin}
            {user.profile.instagram}
            {user.profile.about_me}

            {user.skills.map((skill, index) => {
              return (
                <div key={index}>
                  {skill.language} {skill.framework}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default MyProfile;
