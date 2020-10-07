import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      refferal: "000000",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onRefferalChange = (event) => {
    this.setState({ refferal: event.target.value });
  };
  onSubmit = e => {
    e.preventDefault()
    if (
      this.state.email.length > 6 &&
      this.state.password.length > 5 &&
      this.state.name.length > 3
    ) {
      fetch("http://139.59.81.94:5000/Register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          refferal: this.state.refferal,
        })
      }).then(
        setTimeout(() => {
          this.props.history.push("/Login");
        }, 1000)
      );
    }
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-login">
            <p className="title-login">Sign UP</p>
            <input
              className="password-input"
              required
              onChange={this.onNameChange}
              type="name"
              placeholder="Enter Your Name :"
            />
            <input
              className="email-input"
              required
              onChange={this.onEmailChange}
              minLength="6"
              type="email"
              placeholder="Enter Your Email :"
            />
            <input
              className="password-input"
              required
              onChange={this.onPasswordChange}
              minLength="6"
              type="password"
              placeholder="Enter New Password Here"
            />
            <input
              className="password-input"
              onChange={this.onRefferalChange}
              minLength="6"
              type="text"
              placeholder="Referral Number (Optional)"
            />
            <button
              className="submit-input"
              onClick={this.onSubmit}
            >Sign Up</button>
            <Link className="undr-form" to="/Login">
              Log In
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Signup);
