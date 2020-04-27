import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";
import emojis from 'emoji-dictionary';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "dog", "heart_eyes_cat"]

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
    <header className="new-card-form__header"> 
    <p className="new-card-form__form-button"> Submit your own card~ </p>
    <form onSubmit={onFormSubmit} className="new-card-form new-card-form__form">
      {/* text input */}
    <div class="group">
      <label htmlFor="text"></label>
      <input
        type="text"
        placeholder="your message"
        onChange={onInputChange}
        name="text"
        value={cardFields.text}
        className=" new-card-form__form-textarea"
      />
      <span class="highlight"></span>
      <span class="bar"></span>
    </div>
      {/* emoji */}
      <label htmlFor="emoji"></label>
      <select 
        name="emoji"
        placeholder="emoji"
        onChange={onInputChange}
        value={cardFields.emoji}
        className="new-card-form__form-select"
      >   
      <option value="" selected disabled hidden>Choose an emoji</option>
        {EMOJI_LIST.map(emoji =>
        <option key={emoji} value={emoji}>{emojis.getUnicode(`${emoji}`)}</option>
      )};
      </select>
      {/* submit */}
      <input
        type="submit"
        value="Add Card"
        className="new-card-form__form-button"
      />
    </form>
    </header>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func
};

export default NewCardForm;
