import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import calsses from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js rendering...]");
    return (
      <Auxiliary>
        <p onClick={this.props.click}>
          I'm {this.props.name}, and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        ></input>
      </Auxiliary>
    );
  }
}

export default Person;
