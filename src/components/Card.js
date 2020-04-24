import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
const emoji = require("emoji-dictionary");

// Build the Card component to display a single 
// inspirational quote and optional emoji

const Card = ({cards}) => {
	const newCards = cards.map((card) => (
		<p >{card.text} {card.emoji} </p>
	))

  // const newCards = cards.map((card) => (
  //   card.text
  // ));

  // emoji.getUnicode("heart_eyes");
  // 😍

  return (
    <div className="card card__content card__content-text">
      {/* {emoji.getUnicode("heart_eyes")} */}
      {newCards}
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
