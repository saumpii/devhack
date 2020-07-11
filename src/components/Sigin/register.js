import React, { useState, useEffect } from "react";
import "./register.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
import { userRegisterReducer } from "../../Reducers/userReducers";
import Signin from "./login";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className="mid">
      <form className="form" onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        {error ? <div className="Em">{error}</div> : null}

        <div className="form-group">
          <input
            type="text"
            placeholder=" "
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Name</label>
          <div className="error">
            <i className="fas fa-exclamation-circle"></i>
            Error encountered!
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder=" "
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <div className="error">
            <i className="fas fa-exclamation-circle"></i>
          </div>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder=" "
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <div className="error">
            <i className="fas fa-exclamation-circle"></i>
          </div>
        </div>
        <div>
          <Link to="/Login">Login if account exists</Link>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Register;
