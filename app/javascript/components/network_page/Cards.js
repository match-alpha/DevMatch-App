import React from "react";
import PropTypes from "prop-types";
import { Card, Grid, CardColumns, Container, Row, Col, CardGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

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

            <Container>
            <Col xs="4">
            <Card style={{ width: "15rem" }} key={index}>
              <Card.Img
                variant="top"
                src="https://vignette.wikia.nocookie.net/uncyclopedia/images/6/6e/CarltonBanks.jpg/revision/latest?cb=20060508113424"
              />
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
                      {skill.language === "Ruby" && (
                        <Badge variant="warning">Ruby</Badge>
                      )}
                      {skill.language === "Javascript" && (
                        <Badge variant="warning">Javascript</Badge>
                      )}
                      {skill.framework === "Rails" && (
                        <Badge variant="info">Rails</Badge>
                      )}
                    </Card.Text>
                  );
                })}
                <Button variant="outline-success">View Profile</Button>
              </Card.Body>
            </Card>
            </Col>
            </Container>



          );
        })}
      </div>
    );
  }
}

export default MediaCard;
