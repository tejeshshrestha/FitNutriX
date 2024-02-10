import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({});
  const [msg, setMessage] = useState();
  const nav = useNavigate();

  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(register);
    axios
      .post("http://localhost:5000/api/register", register)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    setMessage(<div className="success">Registered succesfully!</div>);
    nav("/login");
  };
  return (
    <div className="main login-main">
      <h1 className="content">
        A Small Step to Fitness...
        <br />
        <br />
        <span className="content">A Big Leap for Health!</span>
      </h1>

      <div className="heading">
        {msg}
        <div className="register">REGISTER</div>
        <br />
        <div className="input-division">
          <input
            type="name"
            name="name"
            placeholder="Enter Full Name"
            className=""
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className=""
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className=""
            onChange={handleChange}
          />
          <input
            type="password"
            name=""
            placeholder="Confirm Password"
            className=""
          />
          <button className="cn" onClick={handleRegister}>
            Submit
          </button>
        </div>
        <div className="account">
          <p>
            Already have an account? <Link to="/Login">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
