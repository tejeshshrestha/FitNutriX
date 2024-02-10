import { useState } from "react";
import workouts from "../workout.json";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Workout = () => {
  const [workout, setWorkout] = useState({});
  const nav = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const obj = {
      ...workout,
      [name]: value,
    };
    console.log(obj);
    setWorkout(obj);
  };

  const handleWorkout = (event) => {
    event.preventDefault();
    console.log(workout);
    axios
      .post("http://localhost:5000/api/workouts", workout)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    nav("/workouts");
  };

  return (
    <div className="icon">
      <div class="main">
        <div class="navbar">
          <div>
            <div className="workouts">
              <div>
                <label htmlFor="name">Workout done:</label>
                <select
                  className=""
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  required
                >
                  {workouts.map((workout) => {
                    return <option>{workout.name}</option>;
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="sets" className="">
                  Total Sets Done:
                </label>
                <input
                  className=""
                  onChange={handleChange}
                  type="text"
                  name="sets"
                  id="sets"
                  required
                />
              </div>
              <div className="">
                <label htmlFor="reps" className="">
                  Reps Done per Set:
                </label>
                <input
                  className=""
                  onChange={handleChange}
                  type="text"
                  name="reps"
                  id="reps"
                />
              </div>

              <div className="">
                <label htmlFor="start" className="">
                  Start Time :
                </label>
                <input
                  className=""
                  onChange={handleChange}
                  type="time"
                  name="reps"
                  id="reps"
                />
              </div>

              <div className="">
                <label htmlFor="end" className="">
                  End Time :
                </label>
                <input
                  className=""
                  onChange={handleChange}
                  type="time"
                  name="reps"
                  id="reps"
                />
              </div>

              <div className="">
                <button className="" type="submit" onClick={handleWorkout}>
                  <span>SAVE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
