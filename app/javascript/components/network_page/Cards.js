import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Grid, Button, Label } from "semantic-ui-react";
import Select, { components } from "react-select";
import ActiveStorageProvider from 'react-activestorage-provider';
import ShowProfile from "../pages/ShowProfile"
import Logo from "../images/Logo.png";
import NavLogo from "../images/NavbarLogo.png";
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Container,
  Jumbotron,
  Row,
  Col,
  Tab,
  Tabs
} from "react-bootstrap";


const user_type = [
  { label: "Mentor", value: "Mentor" },
  { label: "Mentee", value: "Mentee" },
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
      userTypeSearch: "",
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
      <div id="background1">
        <Navbar bg="primary" variant="dark" sticky="top">
          <Navbar.Brand img="true" img src={Logo} href="#home">
            <img
              src={NavLogo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#mission">Home</Nav.Link>
            <Nav.Link href="#tech">Network</Nav.Link>
            <Nav.Link href="#about">Profile</Nav.Link>
          </Nav>
        </Navbar>
        <h3> I'm Looking for a: </h3>

        <form>

        <input type="radio" id="radio-btn-1" name="radio-btns" value=""
        checked={this.state.userTypeSearch === "All"}
        onChange={this.handleChangeRadio} />
        <label for="radio-btn-1" class="btn"> All </label>

        <input type="radio" id="radio-btn-2" name="radio-btns" value="Mentor"
        checked={this.state.userTypeSearch === "Mentor"}
        onChange={this.handleChangeRadio} />
        <label for="radio-btn-2" class="btn">Mentor</label>

        <input type="radio" id="radio-btn-3" name="radio-btns" value="Mentee"
        checked={this.state.userTypeSearch === "Mentee"}
        onChange={this.handleChangeRadio} />
        <label for="radio-btn-3" class="btn">Mentee</label>

        </form>

        <br />

        <form>
          <Select
            onChange={this.searchHandler}
            value={term}
            options={language}
            placeholder = "Select a language you want to learn:"
          />
        </form>

        <br />
        <br />
        <div className = "swag">
        <Grid relaxed columns={4}>
          {this.state.users
            .filter(this.searchingFor(this.state.term))
            .map((user, index) => {
              return (
                <Grid.Column key={index}>
                  <Card>
                    <Image id="cardimage" src={user.avatar_url} />

                    <Card.Content>
                      <Card.Header>{user.first_name}</Card.Header>
                      <Label color="red" ribbon>
                        {user.user_type}
                      </Label>
                      <Card.Meta>
                        <span className="date"></span>
                      </Card.Meta>
                      <br />
                      {user.skills.map((skill, index) => {
                        return (
                          <div>
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
                          <br />
                          <ShowProfile
                            user = {user}
                            profile = {user.profile}
                            skill={skill}
                            />
                          </div>
                        );
                      })}
                    </Card.Content>
                  </Card>
                </Grid.Column>
              );
            })}
        </Grid>
        </div>
      </div>
    );
  }
}

export default MediaCard;
