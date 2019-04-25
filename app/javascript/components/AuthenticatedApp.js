import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import MyProfile from './pages/MyProfile'
import Profilepage from './pages/profilepage'
class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
      <React.Fragment>

          <Switch>
        <Route exact path="/profile" render={props =>( <MyProfile current_user={this.props.current_user} isAuthed={true} />)} />
        <Route exact path="/profile/new" component={Profilepage}/>


        </Switch>

      </React.Fragment>
      </Router>
    );
  }
}

export default AuthenticatedApp
