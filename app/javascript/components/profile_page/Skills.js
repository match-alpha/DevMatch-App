import React, { Component } from "react";
import Select, { components } from "react-select";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const Languages = [
  { label: "Ruby", value: "Ruby" },
  { label: "JavaScript", value: "JavaScript" },
  { label: "Python", value: "Python" },
  { label: "PHP", value: "PHP" },
  { label: "C#", value: "C#" },
  { label: "Java", value: "Java" }
];

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLanguage: null
    };
  }
  handleChange = selectedLanguage => {
    this.setState({ selectedLanguage });
    console.log(`Language(s) selected:`, selectedLanguage);
  };

  render() {
    const { selectedLanguage } = this.state;

    return (
      <div>
        <Select
          value={selectedLanguage}
          onChange={this.handleChange}
          options={Languages}
          isMulti
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}

export default Skills;
