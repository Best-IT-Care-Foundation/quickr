import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      id: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmit = () => {
    if (this.state.email.length > 6 || this.state.password > 5) {
      fetch("http://139.59.81.94:5000/Login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ id: res });
        })
        .then(
          setTimeout(() => {
            this.props.history.push(`/profile/${this.state.id}`);
          }, 1000)
        );
    }
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-login">
            <p className="title-login">Login</p>
            <input
              className="email-input"
              required
              onChange={this.onEmailChange}
              type="email"
              placeholder="e.g. example@example.com"
            />
            <input
              className="password-input"
              required
              minLength="6"
              onChange={this.onPasswordChange}
              type="password"
              placeholder="Enter Your Password Here"
            />
            <input
              className="submit-input"
              onClick={this.onSubmit}
              value="Login"
            />
            <Link className="undr-form" to="/Register">
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
