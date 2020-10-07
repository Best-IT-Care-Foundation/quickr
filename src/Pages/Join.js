import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      Address:'',
      number:'',
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
  onAddChange = (event) => {
    this.setState({ Address: event.target.value });
  };
  onRefferalChange = (event) => {
    this.setState({ refferal: event.target.value });
  };
  onnumber=e=>{
    this.setState({number:e.target.value})
  }
  onSubmit = () => {
    if (
      this.state.email.length > 6 &&
      this.state.password.length > 5 &&
      this.state.Address.length > 3 &&
      this.state.name.length > 1 &&
      this.state.number.length > 10
    ) {
      fetch("http://139.59.81.94:5000/Join", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          number: this.state.number,
          Address: this.state.Address,
        })
      }).then(setTimeout(()=>{
          this.props.history.push('/VendorLogin')
      },1000))
    }
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-login">
            <p className="title-login">Join as a Vendor</p>
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
              onChange={this.onnumber}
              minLength="6"
              type="number"
              placeholder="mobile number"
            />
            <input
              className="password-input"
              onChange={this.onAddChange}
              minLength="6"
              type="text"
              placeholder="Your Address"
            />
            <input
              className="submit-input"
              onClick={this.onSubmit}
              value="Submit"
            />
            <Link className="undr-form" to="/VendorLogin">
              Log In
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Signup);
