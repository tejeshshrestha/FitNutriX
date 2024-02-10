import React from "react";
import { useState } from "react";

const Bmi = () => {
  const [info, setInfo] = useState({});

  const [bmi, setBmi] = useState();

  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };
  const handleStatus = (bmi) => {
    if (bmi < 18.5) {
      return <div>You are UnderWeight!</div>;
    } else if (bmi >= 18.5 && bmi <= 24.99) {
      return <div>You are of Healthy Weight!</div>;
    } else if (bmi >= 25 && bmi <= 29.99) {
      return <div>You are OverWeight!</div>;
    } else {
      return <div>Caution!! Obesity Detected.</div>;
    }
  };
  const handleClick = (event) => {
    event.preventDefault(); //By default, form tries to change the page to submit
    console.log(info);
    const height = Number(info.feet * 12) + Number(info.inches);
    const weight = info.weight * 2.20462;
    // console.log(height, weight);
    let result = (703 * weight) / (height * height);
    result = result.toFixed(2);
    setBmi(
      <h1>
        Your bmi is {result}.{handleStatus(result)}
      </h1>
    );
    setTimeout(() => {
      setBmi();
    }, 5000);
  };
  return (
    <div class="main">
      <div>
        <h2 class="logo">
          <span>BMI CALCULATOR</span>
        </h2>
        <table>
          <br />
          Below 18.5 Underweight
          <br />
          18.5 – 24.9 Healthy Weight
          <br />
          25.0 – 29.9 Overweight
          <br />
          30.0 and Above Obesity
        </table>
      </div>

      <div className="bmi">
        {bmi}
        <h2>
          <p>
            Height :
            <div className="">
              <input
                className=""
                type="number"
                id="feet"
                name="feet"
                placeholder="feet"
                onChange={handleChange}
              />
              <br />
              <input
                type="number"
                id="inches"
                name="inches"
                placeholder="inches"
                onChange={handleChange}
              />
            </div>
            <br />
            <span id="height_error"></span>
          </p>
        </h2>
        <h2>
          <p>
            Weight: <br />
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="kg"
              onChange={handleChange}
            />
            <br />
            <span id="weight_error"></span>
          </p>
        </h2>
        <button className="button" id="btn" onClick={handleClick}>
          Calculate
        </button>
        <p id="output"></p>
      </div>
    </div>
  );
};

export default Bmi;
