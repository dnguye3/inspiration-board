import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

const Board = ({ url }) => {
  const [cardList, setCardList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const loadCards = () => {
    axios
      .get(url)
      .then((response) => {
        const apiCardList = response.data;
        let cardCollection = apiCardList.map((item) => {
          return (
            <Card
              key={item.card.id}
              id={item.card.id}
              text={item.card.text}
              emoji={item.card.emoji}
              deleteCardCallback={deleteCard}
            />
          );
        });
        console.log("this is Card Collection:", cardCollection);
        console.log("this is response", response);
        setCardList(cardCollection);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    loadCards();
  }, []);

  // const deleteCard = (id) => {
  //   console.log(`It\'s going through cardList through deleteCardCallback`, {
  //     cardList,
  //   });

  //   axios
  //     .delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
  //     .then((response) => {
  //       setErrorMessage(`Card ${id} deleted`);
  //       setCardList(loadCards);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(`Unable to delete card ${id}`);
  //     });
  // };

  // const newCardList = cardList.filter((card) => {
  // return card.id !== id;
  // });
  const deleteCard = (id) => {
    // setCardList(renderCards);
    // console.log(
    //   `It\'s going through cardList through deleteCardCallback`,
    //   cardList
    // );

    // const newCardList = cardList.filter((card) => {
    //   return card.id !== id;
    // });
    // console.log(`this is the new card list`, newCardList);
    // if (newCardList.length < cardList.length) {

    // LEE SAVES THE DAY
    axios
      .delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        loadCards();
      })
      .catch((error) => {
        setErrorMessage(`Unable to delete card ${id}`);
      });
    // }
  };

  // const loadCards = () => {
  //
  // }
  //
  // useEffect({loadCards}, []);

  // delete card axios pseudocode
  //   const deleteStudent = (id) => {
  //   const newStudentList = studentList.filter((student) => {
  //     return student.id !== id;
  //   });

  //   if (newStudentList.length < studentList.length) {
  //     axios.delete(`${ API_URL_BASE }/${ id }`)
  //       .then((response) => {
  //         setErrorMessage(`Student ${ id } deleted`);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(`Unable to delete student ${ id }`);
  //       })
  //     setStudentList(newStudentList);
  //   }
  // }

  // delete button callback

  return (
    <div>
      <NewCardForm />
      <div className="board">{cardList}</div>
    </div>
  );
};

// Board.propTypes = {

// };

export default Board;
