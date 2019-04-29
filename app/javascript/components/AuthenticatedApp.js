import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MyProfile from "./pages/MyProfile";
import Profilepage from "./pages/profilepage";
import MediaCard from "./network_page/Cards";
import EditProfile from "./pages/EditProfile";
import CreateProfile from "./pages/CreateProfile";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          console.log(this.props.skill);
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
