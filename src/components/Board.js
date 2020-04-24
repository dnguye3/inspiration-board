import React, { Component , useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({cards}) => {
  // const [cardList, setCardList] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  // useEffect(() => {
  //   axios.get(url)
  //     .then((response) => {
  //       const apiCardList = response.data;
  //       console.log("it works", response.data);
  //       setCardList(apiCardList);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message
  //       setErrorMessage(errorMessage);
  //       console.log(errorMessage)
  //     });
  // }, []);
  

  return (
    <div>
      <Board
      Board
      />
    </div>
  )
};
Board.propTypes = {

};

export default Board;
