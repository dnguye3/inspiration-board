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
            <Card
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


  console.log("this is cardList", cardList);

  // console.log("this is cardcollection", cardCollection);
  // <p >{card.text} {card.emoji} </p>

  // const parsedCardCollection = cardList.map((card) => {
  //   <Card
  //     id={card.id}
  //     text={card.text}
  //     emoji={card.emoji}
  //   />
  // })


  // const studentComponents = props.students.map((student, i) => {
  //   return (
  //     <li key={i}>
  //       <Student
  //         fullName={student.fullName}
  //         email={student.email}
  //         present={student.present}
  //         id={student.id}
  //         onUpdateStudent={props.onUpdateStudent}
  //       />
  //     </li>
  //   );
  // });


  return (
    <div className="board">
      {/* {
        cardList.map((card) => (
          <Card prop="card" />
        ))
      } */}
      {/* {parsedCardCollection} */}
      {cardList}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
