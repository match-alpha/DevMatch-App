import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { CardColumns } from "react-bootstrap";
import MediaCard from "./network_page/Cards";
import User from "./avatar.js";
import MyProfile from "./pages/MyProfile";

import CreateProfile from "./pages/CreateProfile";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
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
