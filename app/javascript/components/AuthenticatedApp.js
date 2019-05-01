import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
<<<<<<< HEAD
import { Card, Grid, CardColumns, Container, Row, Col, CardGroup } from "react-bootstrap";
import MediaCard from "./network_page/Cards";
import MyProfile from "./pages/MyProfile";
import Profilepage from "./pages/profilepage";
import EditProfile from "./pages/EditProfile";
=======
import { CardColumns } from "react-bootstrap";
import MediaCard from "./network_page/Cards";
import User from "./avatar.js";
import MyProfile from "./pages/MyProfile";

>>>>>>> master
import CreateProfile from "./pages/CreateProfile";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
<<<<<<< HEAD
          <div>Authenticated</div>
=======
>>>>>>> master
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
