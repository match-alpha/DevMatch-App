import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Networkpage from "./pages/Networkpage";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Networkpage />
          <Switch>{/* <Route path="/profile" component={Search} /> */}</Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default AuthenticatedApp;
