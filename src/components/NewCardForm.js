import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";

const NewCardForm = ({addCardCallback}) => {
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

    addCardCallback(cardFields);

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
      {/* submit */}
      <input
        type="submit"
        value="Add Card"
        className="new-card-form__form-button"
      />
    </form>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func
};

export default NewCardForm;
