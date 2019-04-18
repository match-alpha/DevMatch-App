import React from "react"
import PropTypes from "prop-types"
import Homepage from "./pages/Homepage"
class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          Unauthenticated
        <Homepage/>
        </div>

      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
