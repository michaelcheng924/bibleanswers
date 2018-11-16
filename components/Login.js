import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    pw: "",
    username: ""
  };

  componentDidMount() {
    const token = localStorage.getItem("bible-answers-token");

    if (token) {
      axios
        .post("http://bibleanswersapi.herokuapp.com/checktoken", { token })
        .then(response => {
          if (response.data.success) {
            this.props.onLoginSuccess(token);
          }
        });
    }
  }

  onSubmit = event => {
    event.preventDefault();

    axios
      .post("http://bibleanswersapi.herokuapp.com/login", {
        password: this.state.pw,
        username: this.state.username
      })
      .then(response => {
        if (response.data.success) {
          this.props.onLoginSuccess(response.data.token);
        }
      });
  };

  render() {
    return (
      <form className="admin__login" onSubmit={this.onSubmit}>
        <div>
          <input
            onChange={event => this.setState({ username: event.target.value })}
            placeholder="Username"
            value={this.state.username}
          />
        </div>
        <div>
          <input
            type="password"
            onChange={event => this.setState({ pw: event.target.value })}
            placeholder="Password"
            value={this.state.pw}
          />
        </div>
        <button>Log in</button>
      </form>
    );
  }
}
