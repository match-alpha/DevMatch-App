import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Card, Grid, CardColumns, Container, Row, Col, CardGroup } from "react-bootstrap";
import MediaCard from "./network_page/Cards";
import User from "./avatar.js"

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div>Authenticated</div>
          <CardColumns>
          <MediaCard />
          </CardColumns>
          <Switch>{/* <Route path="/profile" component={Search} /> */}</Switch>
          <User user={this.props.current_user}/>
        </React.Fragment>
      </Router>

    );
  }
}

export default AuthenticatedApp;
