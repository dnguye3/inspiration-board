import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Board from "./components/Board";
import Card from "./components/Card";
const emoji = require("emoji-dictionary");

const App = () => {
  // const [cardList, setCardList] = useState(cards);
  // console.log("cardList", cardList)

  return (
    <section>
      <header className="header">
        <h1 className="header__h1">
          <span className="header__text">Inspiration Board</span>
        </h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/Hala&Diana/cards"
        boardName={`Hala&Diana`}
      />
    </section>
  );
};

export default App;
