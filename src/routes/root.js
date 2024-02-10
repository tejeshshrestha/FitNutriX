import { Link } from "react-router-dom";
import React from "react";

export default function Root() {
  return (
    <div>
      <div class="navbar">
        <div>
          <Link to="/workouts" className="link heading">
            FitNutriX
          </Link>
        </div>
        <div>
          <Link to="/workouts" className="link">
            Workout Logging
          </Link>
          <Link to="/bmi" className="link">
            Calculate BMI
          </Link>
          <Link to="/nutrition" className="link">
            Nutritional Value
          </Link>
          <Link to="/details" className="link">
            Tutorials
          </Link>
          <Link to="/logout" className="link">
            Logout
          </Link>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
