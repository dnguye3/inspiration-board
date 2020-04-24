import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
const emoji = require("emoji-dictionary");

// Build the Card component to display a single 
// inspirational quote and optional emoji

const Card = (props) => {

  return (
    <div className="card card__content">
      {/* {emoji.getUnicode("heart_eyes")} */}
      <p className="card__content-text">
      {props.text}<span className="card__content-emoji"> {emoji.getUnicode(`${props.emoji}`)}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
