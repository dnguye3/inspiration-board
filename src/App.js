import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Board from './components/Board';
import Card from './components/Card';
const emoji = require("emoji-dictionary");



const App = () => {

  // const [cardList, setCardList] = useState(cards);
  // console.log("cardList", cardList)


  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
      </header>
      {console.log('please work')}
      <Board
        url="https://inspiration-board.herokuapp.com/boards/Hala&Diana/cards"
        boardName={`Hala&Diana`}
      />

    </section>
  );
};

export default App;
// 
// const App = () => {
  // console.log('rendering');
  // const [studentList, setStudentList] = useState([]);
// 
  // useEffect(() => {
    // get the studentList from localstorage
    // const jsonStudentList = localStorage.getItem('studentList');
    // Convert the json into an Array, if it's null use the students array.
    // const startingStudents = JSON.parse(jsonStudentList) || students;
// 
    // Use the local storage to update state
    // setStudentList(startingStudents);
// 
    // Cleanup function
    // return () => {
      // cleanup actions here
// 
      // localStorage.setItem('studentList', JSON.stringify(studentList));
    // }
  // }, []);
// 



// useEffect to get StudentData from API

//   const [studentList, setStudentList] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);


