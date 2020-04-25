import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import emojis from "emoji-dictionary";

const Card = ({ emoji, id, text, deleteCardCallback }) => {
  return (
    <div className="card card__content">
      <p className="card__content-text">{text}</p>
      <span className="card__content-emoji">
        {emojis.getUnicode(`${emoji}`)}
      </span>
      <button
        onClick={() => {
          deleteCardCallback(id)
        }}
        className="card__delete card__delete:hover"
      >
        ✨ Take this card ✨
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
  deleteCardCallback: PropTypes.func,
};

export default Card;
