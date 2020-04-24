import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({ url }) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        const apiCardList = response.data;
        let cardCollection = apiCardList.map((item) => {
          return (
            // id: item.card.id,
            // text: item.card.text,
            // emoji: item.card.emoji

            // so yeah for here i gave up trying to get card to work outside of the api call
            // i don't know why we can't perform this mapping outside of the call, hope to get answers
            // at roundtable
            <Card
              key={item.card.id}
              id={item.card.id}
              text={item.card.text}
              emoji={item.card.emoji}
            />
          );
        });
        console.log("this is Card Collection:", cardCollection);
        console.log("this is response", response);
        setCardList(cardCollection);
      })
      .catch((error) => {
        const errorMessage = error.message
        setErrorMessage(errorMessage);
        console.log(errorMessage)
      });
  }, []);

  // const cardCollection = cardList.map((card) => {
  //   console.log(card);
  //   return ( 
  //      card
  //       // <Card
  //       // text={card.text}
  //       // emoji={card.emoji}
  //       // />
  //   );
  // });
    // <p >{card.text} {card.emoji} </p>
  

  console.log("this is cardList", cardList);

  return (
    <div className="board">
      {cardList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
