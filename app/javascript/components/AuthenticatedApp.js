import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MediaCard from "./network_page/Cards";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div>Authenticated</div>
          <MediaCard />
          <Switch>{/* <Route path="/profile" component={Search} /> */}</Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default AuthenticatedApp;
