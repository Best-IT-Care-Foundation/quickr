import React, { Component } from "react";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmit = () => {
if (this.state.email=== 'masum' || this.state.password === 'masum1233psh0ping'){
          setTimeout(() => {
            this.props.history.push(`/0psAdmin/${this.state.email}/${this.state.password}`);
          }, 1000)
    }
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-login">
            <p className="title-login">Welcome</p>
            <input
              className="email-input"
              required
              onChange={this.onEmailChange}
              type="email"
              placeholder=":)"
            />
            <input
              className="password-input"
              required
              minLength="6"
              onChange={this.onPasswordChange}
              type="password"
              placeholder=":("
            />
            <input
              className="submit-input"
              onClick={this.onSubmit}
              value="Login"
            />
          </div>
        </form>
      </div>
    );
  }
}
