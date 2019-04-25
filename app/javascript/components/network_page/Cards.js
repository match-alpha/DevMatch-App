import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Grid, Button, Label } from "semantic-ui-react";
import Badge from "react-bootstrap/Badge";

const sizes = [
  "mini",
  "tiny",
  "small",
  "medium",
  "large",
  "big",
  "huge",
  "massive"
];

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
        <Grid relaxed columns={5}>
          {users.map((user, index) => {
            return (
              <Grid.Column key={index}>
                <Card>
                  <Image src="https://vignette.wikia.nocookie.net/uncyclopedia/images/6/6e/CarltonBanks.jpg/revision/latest?cb=20060508113424" />
                  <Card.Content>
                    <Card.Header>
                      {user.first_name}
                      {user.user_type}
                    </Card.Header>
                    <Card.Meta>
                      <span className="date">{user.user_type}</span>
                    </Card.Meta>
                    {user.skills.map((skill, index) => {
                      return (
                        <Card.Description key={index}>
                          {skill.language === "Ruby" && (
                            <Label basic color="red">
                              Ruby
                            </Label>
                          )}
                          {skill.language === "Javascript" && (
                            <Label basic color="yellow">
                              Javascript
                            </Label>
                          )}
                          {skill.framework === "Rails" && (
                            <Label basic color="pink">
                              Rails
                            </Label>
                          )}
                        </Card.Description>
                      );
                    })}
                    <br />
                    <Button basic color="teal">
                      View Profile
                    </Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default MediaCard;
