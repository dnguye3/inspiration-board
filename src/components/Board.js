import React, { Component , useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = ({url}) => {

  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        const apiCardList = response.data;
        console.log("it works", response.data);
        setCardList(apiCardList);
      })
      .catch((error) => {
        const errorMessage = error.message
        setErrorMessage(errorMessage);
        console.log(errorMessage)
      });
  }, []);
  
  console.log("this is cardList", cardList, cardList[2]);

  const cardCollection = cardList.map((card) => {
    console.log(card);
    return ( 
        <Card
        text={card.card.text}
        emoji={card.card.emoji}
        />
    );
  });
    // <p >{card.text} {card.emoji} </p>
  



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
      {cardCollection}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
