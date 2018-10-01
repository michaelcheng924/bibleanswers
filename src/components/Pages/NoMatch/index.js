import "./styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NoMatch extends Component {
  render() {
    return (
      <div className="no-match">
        <div>This page doesn't exist.</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
