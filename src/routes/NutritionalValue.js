import axios from "axios";
import { useState } from "react";
import React from "react";

const config = {
  headers: {
    "x-app-id": "e1fb5942",
    "x-app-key": "9c7e89c2272d8af2dc4525213d93eee1",
  },
};

const url = "https://trackapi.nutritionix.com/v2/search/instant";

const NutritionalValue = () => {
  const [value, setValue] = useState();
  const handleChange = async (event) => {
    const obj = {
      query: event.target.value,
      detailed: true,
    };
    try {
      const response = await axios.post(url, obj, config);

      setValue(
        <div className="">
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Serving Quantity</th>
                <th>Serving Unit</th>
                <th>Serving Weight Grams</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {response.data.common.map((common) => (
                <tr>
                  <td>{common.food_name}</td>
                  <td>{common.serving_qty}</td>
                  <td>{common.serving_unit}</td>
                  <td>{common.serving_weight_grams}</td>
                  <td>{common.full_nutrients[4].value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } catch (error) {
      setValue();
    }
  };
  return (
    <div>
      <div>
        <h1 className="">Nutrition Values</h1>
        Search Food: <input name="food" onChange={handleChange} />
      </div>
      <div>{value}</div>
    </div>
  );
};

export default NutritionalValue;
