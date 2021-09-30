import React, { useEffect, useState } from 'react';
import './App.css';
import Cell from './Cell.js'
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  // const [socket, setSocket] = useState(null);
  const [response, setResponse] = useState("");
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [playerStatus, setPlayerStatus] = useState(1)


  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      console.log("this is data, line 17: ", data)
      setResponse(data);
    });
  }, []);

  const cells = board.map((cell, ind) => {
    return (
      <Cell key={ind} handleClick={handleClick} id={ind} status={cell} />
    )
  })

  function togglePlayer() {
    setPlayerStatus(playerStatus === 1 ? 2 : 1)
  }

  function handleClick(event) {

    const ind = event.target.id
    const newArr = [...board]
    newArr[ind] = playerStatus
    console.log(newArr)
    setBoard(newArr)
    togglePlayer()
  }


  // replace table using flexbox 
  // dynamically create the board using map
  return (
    <div className="App">
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
      <header onClick={togglePlayer}>
        {playerStatus === 1 ? "Player 1's Turn" : "Player 2's Turn"}
      </header>
      <div style={{ display: "flex", flexWrap: "wrap", width: "50vw", marginTop: "5vh", marginRight: "auto", marginLeft: "auto" }}>
        {cells}
      </div>
    </div>
  );
}

export default App;
