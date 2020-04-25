import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import emojis from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog",
];

const NewCardForm = (props) => {
  // onclickcallback prop & function
  // within callback function in Board, we will need axios POST request
  const [cardFields, setCardFields] = useState({
    text: "",
    emoji: "",
  });

  const onInputChange = (event) => {
    const newCardFields = {
      ...cardFields,
    };
    newCardFields[event.target.name] = event.target.value;
    setCardFields(newCardFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback(cardFields);

    setCardFields({
      text: "",
      emoji: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="new-card-form new-card-form__form">
      <header className="new-card-form__header">Submit a card!</header>
      {/* text input */}
      <label htmlFor="text" className="new-card-form__form-label">
        Your message:
      </label>
      <input
        placeholder="text"
        onChange={onInputChange}
        name="text"
        value={cardFields.text}
        className=" new-card-form__form-textarea"
      />
      {/* emoji */}
      <label htmlFor="emoji" className="new-card-form__form-label">
        Emoji:
      </label>
      <input
        placeholder="emoji"
        onChange={onInputChange}
        name="emoji"
        value={cardFields.emoji}
        className="new-card-form__form-label new-card-form__form-textarea"
      />
      <input
        type="submit"
        value="Add Card"
        className="new-card-form__form-button"
      />
    </form>
  );
};

export default NewCardForm;
