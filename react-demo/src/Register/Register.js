import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import "./Register";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
    phone: "",
  };

  registerHandler() {
    axios
      .post("https://mean.stagingsdei.com:6047/user/register", this.state)
      .then(function (response) {
        if (response.status === 200) {
          console.log("DATA", response.data, response.data.message);
          this.props.history.push("");
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="loginBlock">
        <h1 className="header">Register</h1>
        <input
          type="text"
          placeholder="First Name"
          className="inpFields"
          name={this.state.firstname}
          onChange={(e) => {
            this.setState({ firstname: e.target.value });
          }}
          value={this.state.firstname}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="inpFields"
          name={this.state.lastname}
          onChange={(e) => {
            this.setState({ lastname: e.target.value });
          }}
          value={this.state.lastname}
        />
        <input
          type="password"
          placeholder="Password"
          className="inpFields"
          name={this.state.password}
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          value={this.state.password}
        />
        <input
          type="text"
          placeholder="Email"
          className="inpFields"
          name={this.state.email}
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
          value={this.state.email}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="inpFields"
          name={this.state.phone}
          onChange={(e) => {
            this.setState({ phone: e.target.value });
          }}
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="Role"
          className="inpFields"
          name={this.state.role}
          onChange={(e) => {
            this.setState({ role: e.target.value });
          }}
          value={this.state.role}
        />

        <button className="loginButton" onClick={() => this.registerHandler()}>
          Register
        </button>
        <Link to="/">Login</Link>
      </div>
    );
  }
}

export default Register;
