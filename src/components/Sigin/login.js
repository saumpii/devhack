import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Register from "./register";
import "./login.css";
import SignUp from "./register";

const Signin = () => {
  return (
    <div>
      <div className="login_div">
        <p id="header_para" className="w3-animate-fading">
          <b>Sujan</b>
          <span id="card">Dev</span>
        </p>
        <hr id="hr1" />
        {"            "}
        <hr id="hr2" />
        <br />
        <br />
        <br />
        <form action="">
          <input
            type="email"
            name="email"
            placeholder="username"
            required
            className="input_style w3-animate-right"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="input_style w3-animate-left"
          />
          <br />
          <br />
          <input
            type="submit"
            name="submit_button"
            value="LOGIN"
            id="login_button"
            className="w3-animate-bottom"
          />
          <br />
        </form>
        <p id="forgot" className="w3-animate-zoom"></p>
        <div>
          <Link to="/SignUp">Create a account</Link>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Signin;
