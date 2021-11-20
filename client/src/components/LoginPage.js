import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import "./LoginPage.css";
import { login } from "../actions/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    dispatch(login(username));
    navigate("/announcement");
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <i className="fab fa-discord"></i>
          <h1>Discord Clone</h1>
        </div>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="username">Username</label>
          <select name="username" id="username" defaultValue="john.doe">
            <option value="john.doe">john.doe</option>
            <option value="jane.doe">jane.doe</option>
            <option value="react.god">react.god</option>
          </select>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
