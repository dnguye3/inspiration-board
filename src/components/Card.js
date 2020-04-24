import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import emojis from 'emoji-dictionary';
// const emoji = require("emoji-dictionary");

// Build the Card component to display a single 
// inspirational quote and optional emoji

const Card = ({emoji, id, text}) => {

  return (
    <div className="card card__content">
    {/* {emoji.getUnicode("heart_eyes")} */}
    <p className="card__content-text">
    {text}
    </p>
    <span className="card__content-emoji">{emojis.getUnicode(`${emoji}`)}</span>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
