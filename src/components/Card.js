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
      {props.text}
      <p className="card__content-emoji">{emoji.getUnicode(`${props.emoji}`)}</p>
      
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
