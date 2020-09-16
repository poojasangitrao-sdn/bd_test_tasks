import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import "../Dashboard/Dashboard";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "pooja6697@yopmail.com",
    password: pooja6697,
    role: 4,
  };

  loginHandler(e) {
    let data = {
      email: "pooja6697@yopmail.com",
      password: "pooja6697",
      role: 4,
    };
    console.log("LOGIN", this.state, data);

    axios
      .post("https://mean.stagingsdei.com:6047/user/login", {
        header: {
          "Content-Type": "application/json",
        },
        data,
      })
      .then(function (response) {
        console.log("RESP", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="loginBlock">
        <h1 className="header">Login</h1>
        <input
          type="text"
          placeholder="Username/Email"
          className="inpFields"
          name={this.state.email}
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
          value={this.state.email}
        />
        <input
          type="password"
          placeholder="Password"
          name={this.state.password}
          className="inpFields"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
          value={this.state.password}
        />
        <button className="loginButton" onClick={() => this.loginHandler()}>
          Login
        </button>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default Login;
