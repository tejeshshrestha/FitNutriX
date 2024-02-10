import workouts from "../workout.json";
import React from "react";

const Workouts = () => {
  return (
    <div>
      {workouts.map((workout) => {
        return (
          <div>
            <div className="">
              <h1 className="logo">{workout.name}</h1>
            </div>
            <div class="">
              <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${workout.tutorialVideoLink}`}
                title="How to:"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>{workout.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Workouts;
