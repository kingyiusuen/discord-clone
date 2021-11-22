import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import "./LoginPage.css";
import { login, connectSocket } from "../reducers/sessionReducer";
import { loadChannels } from "../reducers/chatReducer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    dispatch(login({ username, password: username }));
  }

  const session = useSelector(state => state.session);

  useEffect(() => {
    if (session.isAuthenticated) {
      dispatch(connectSocket(session.user));
      dispatch(loadChannels());
      navigate("/channel/1");
    }
  }, [dispatch, navigate, session])

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

export default LoginPage
