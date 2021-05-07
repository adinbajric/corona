import React from "react";
import "./Form.css";

function Form({ showPopUp }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    showPopUp();
  };

  return (
    <form className="form__contact">
      <label htmlFor="name">
        <input
          type="text"
          placeholder="Full name"
          id="name"
          className="form__input"
        />
      </label>
      <label htmlFor="number">
        <input
          type="number"
          placeholder="Phone number"
          id="number"
          className="form__input"
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          placeholder="E-mail adress"
          id="email"
          className="form__input"
        />
      </label>
      <label htmlFor="message">
        <textarea
          placeholder="Message"
          id="Message"
          className="form__input contact__textarea"
        ></textarea>
      </label>
      <button onClick={handleSubmit} className="btn btn__form">
        Send a message
      </button>
    </form>
  );
}

export default Form;
