import React, { useState } from 'react';
import './App.css';
import Cell from './Cell.js'
import ClientComponent from './ClientComponent';

function App() {
  const [loadClient, setLoadClient] = useState(true);

  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [playerStatus, setPlayerStatus] = useState(1)

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
      {/* START CODE TO LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        STOP CLIENT
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <ClientComponent /> : null}
      {/* END CODE TO  LOAD OR UNLOAD THE CLIENT */}


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
