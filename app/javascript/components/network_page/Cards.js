import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Grid, Button, Label } from "semantic-ui-react";
import Select, { components } from "react-select";
const user_type = [
  { label: "Mentor", value: "mentor" },
  { label: "Mentee", value: "mentee" },
  { label: "All", value: "" }
];
const language = [
  { label: "Ruby", value: "Ruby" },
  { label: "JavaScript", value: "JavaScript" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "Python", value: "Python" },
  { label: "PHP", value: "PHP" },
  { label: "C#", value: "C#" },
  { label: "Java", value: "Java" },
  { label: "All", value: "" },
  { label: "React", value: "React" }
];
class MediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      skills: [],
      term: "",
      userTypeSearch: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    fetch("/users")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ users: json });
      });
    fetch("/skills.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ skills: json });
      });
  }
  handleChangeRadio = event => {
    this.setState({
      userTypeSearch: event.target.value
    });
  };
  searchHandler(e) {
    this.setState({ term: e.value });
  }

  searchingFor = term => {
    const { userTypeSearch } = this.state;
    const userSkillMatchesTerm = (user, term) => {
      const normalizedTerm = term.toLowerCase();
      const matches = user.skills.filter(skill => {
        return (
          skill.language.toLowerCase() === normalizedTerm ||
          skill.framework.toLowerCase() === normalizedTerm
        );
      });
      return matches.length > 0;
    };
    return function(user) {
      if (!term && !userTypeSearch) {
        return true;
      } else if (!term) {
        return user.user_type === userTypeSearch;
      } else if (!userTypeSearch) {
        return userSkillMatchesTerm(user, term);
      } else {
        return (
          userSkillMatchesTerm(user, term) && user.user_type === userTypeSearch
        );
      }
    };
  };
  render() {
    const { users, skills, term, userTypeSearch } = this.state;
    // const { id } = this.props.current_user;
    return (
      <div>
        <form>
          <label>
            <input
              type="radio"
              value=""
              checked={this.state.userTypeSearch === ""}
              onChange={this.handleChangeRadio}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="mentor"
              checked={this.state.userTypeSearch === "mentor"}
              onChange={this.handleChangeRadio}
            />
            Mentor
          </label>

          <label>
            <input
              type="radio"
              value="mentee"
              checked={this.state.userTypeSearch === "mentee"}
              onChange={this.handleChangeRadio}
            />
            Mentee
          </label>
        </form>
        <form>
          <Select
            onChange={this.searchHandler}
            value={term}
            options={language}
          />
        </form>
        <Grid relaxed columns={4}>
          {this.state.users
            .filter(this.searchingFor(this.state.term))
            .map((user, index) => {
              return (
                <Grid.Column key={index}>
                  <Card>
                    <Image src="http://hot97svg.com/wp-content/uploads/2018/05/um-maluco-no-pedao-will-smith.jpg" />

                    <Card.Content>
                      <Card.Header>{user.first_name}</Card.Header>
                      <Label color="red" ribbon>
                        {user.user_type}
                      </Label>
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
                            {skill.framework === "React" && (
                              <Label basic color="blue">
                                React
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
