import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

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
        setCardList(cardCollection);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log(errorMessage);
      });
  };

  useEffect(() => {loadCards();}, []);

  const deleteCard = (id) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
      .then((response) => {
        loadCards();
      })
      .catch((error) => {
        setErrorMessage(`Unable to delete card ${id}`);
      });
    // }
  };

  const postCard = (cardObject) => {
    axios
      .post(
        `https://inspiration-board.herokuapp.com/boards/Hala&Diana/cards`,
        cardObject)
      .then((response) => {
        loadCards();
      })
      .catch((error) => {
        setErrorMessage(`Unable to post card`);
      });
  };

  return (
      <div><NewCardForm addCardCallback={postCard} />
      <div className="board">
        {cardList}  
      </div>
      </div>

  );
};

Board.propTypes = {
  url: PropTypes.string
};

export default Board;
