import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import emojis from "emoji-dictionary";

const Card = ({ emoji, id, text, deleteCardCallback }) => {
  // source to randomize a set of colors: https://stackoverflow.com/questions/27799125/random-color-on-different-divs/27799274
  let postItNoteColors = ["card__color-yellow", "card__color-red", "card__color-green", "card__color-blue", "card__color-pink"]

  return (
    <div className={"card card__content " + postItNoteColors[Math.floor(Math.random() * postItNoteColors.length)]}>
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
