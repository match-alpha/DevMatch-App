import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      skills: []
    };
  }

  componentDidMount() {
    fetch("/users")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({ users: json });
      });
    fetch("/skills.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({ skills: json });
      });
  }

  render() {
    const { users, skills } = this.state;
    console.log(this.state);
    // const { id } = this.props.current_user;
    return (
      <div>
        {users.map((user, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  {user.first_name}
                  {user.user_type}
                </Card.Title>
                <Card.Text>{user.last_name}</Card.Text>
                <Card.Text> {user.user_type}</Card.Text>
                {user.skills.map((skill, index) => {
                  return (
                    <Card.Text key={index}>
                      {skill.language} {skill.framework}
                    </Card.Text>
                  );
                })}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default MediaCard;
