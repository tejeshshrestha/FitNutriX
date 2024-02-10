import { useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({});
  const [message, setMessage] = useState();
  const nav = useNavigate();
  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };
  const handleClick = async (event) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        login
      );
      window.localStorage.setItem("token", response.data.token);
      setMessage(<div className="success">Logged in succesfully</div>);
      setTimeout(() => {
        setMessage();
      }, 5000);
      nav("/");
    } catch (error) {
      console.log(error.code);
      setMessage(<div className="failure">Invalid username or password</div>);
      setTimeout(() => {
        setMessage();
      }, 5000);
    }
  };
  return (
    <div className="main login-main">
      <div className="heading">LOGIN</div>
      <div>{message}</div>
      <div className="input-division">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className=""
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className=""
          onChange={handleChange}
        />
        <button class="" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div class="account">
        <p>
          Don't have an account? <Link to="/Register">Register Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
