import React, { Component } from "react";
import PropTypes from "prop-types";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import calsses from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Auxiliary>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in!</p>
        )}

        <p onClick={this.props.click}>
          I'm {this.props.name}, and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClass(Person, calsses.Person);
