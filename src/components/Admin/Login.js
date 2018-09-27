import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  onSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/admin/login", {
        pw: this.pw.value
      })
      .then(response => {
        if (response.data.success) {
          this.props.onLoginSuccess(response.data.token);
        }
      });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="password" ref={pw => (this.pw = pw)} />
      </form>
    );
  }
}
