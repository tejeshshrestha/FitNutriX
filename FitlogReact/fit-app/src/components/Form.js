import { useState } from "react";

const Form = () => {
  const [register, setRegister] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const obj = {
      ...register,
      //
      [name]: value,
    };
    console.log(obj);
    setRegister(obj);
  };

  return (
    <div>
      <form className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            className="form-name"
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-email"
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            className="form-phone"
            onChange={handleChange}
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            className="form-date"
            onChange={handleChange}
            type="date"
            name="date"
            id="date"
            required
          />
          <label htmlFor="time">Time:</label>
          <input
            className="form-time"
            onChange={handleChange}
            type="time"
            name="time"
            id="time"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Problem:</label>
          <textarea
            className="form-message"
            onChange={handleChange}
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className="form-span">
          <button className="btn" type="submit">
            <span></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
