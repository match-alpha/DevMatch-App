import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Grid, CardColumns, Container, Row, Col, CardGroup } from "react-bootstrap";
import MediaCard from "./network_page/Cards";
import MyProfile from "./pages/MyProfile";
import Profilepage from "./pages/profilepage";
import EditProfile from "./pages/EditProfile";
import CreateProfile from "./pages/CreateProfile";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div>Authenticated</div>
          <Switch>
          <Route
              exact
              path="/profile"
              render={props => (
                <MyProfile
                  current_user={this.props.current_user}
                  isAuthed={true}
                />
              )}
            />
            <Route exact path="/profile/new" component={CreateProfile} />
            <Route exact path="/network" component={MediaCard} />
          </Switch>
        </React.Fragment>
      </Router>

    );
  }
}

export default AuthenticatedApp;
