import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojis from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = () => {
  return (
    <form
    className="new-card-form new-card-form__form"
    >
    <header className="new-card-form__header">Submit a card!</header>

      <input
          type="submit"
          value="Add Card"
          className="new-card-form__form-button"
      />
    </form>
  )
}

export default NewCardForm;