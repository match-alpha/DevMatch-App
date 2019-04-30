import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
<<<<<<< HEAD
import { Card, Grid, CardColumns, Container, Row, Col, CardGroup } from "react-bootstrap";
import MediaCard from "./network_page/Cards";
import User from "./avatar.js"
=======
import MyProfile from "./pages/MyProfile";
import Profilepage from "./pages/profilepage";
import MediaCard from "./network_page/Cards";
import EditProfile from "./pages/EditProfile";
import CreateProfile from "./pages/CreateProfile";
>>>>>>> master

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
<<<<<<< HEAD
          <div>Authenticated</div>
          <CardColumns>
          <MediaCard />
          </CardColumns>
          <Switch>{/* <Route path="/profile" component={Search} /> */}</Switch>
          <User user={this.props.current_user}/>
=======
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
>>>>>>> master
        </React.Fragment>
      </Router>

    );
  }
}

export default AuthenticatedApp;
