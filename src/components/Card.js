import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
const emoji = require("emoji-dictionary");

// Build the Card component to display a single 
// inspirational quote and optional emoji

const Card = (props) => {

  return (
    <div className="card card__content card__content-text">
      {/* {emoji.getUnicode("heart_eyes")} */}
      {props.card.text}
      {props.card.emoji}
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
