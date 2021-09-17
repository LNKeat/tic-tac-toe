import logo from './logo.svg';
import './App.css';
import Cell from './Cell.js'
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [cell, setCell] = useState(0)
  const [playerStatus, setPlayerStatus] = useState(1)

  const cells = board.map((cell, ind) => {
    return (
      <div>
        <Cell key={ind} handleClick={handleClick} id={ind} status={cell} />
      </div>
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
      <header onClick={togglePlayer}>
        {playerStatus === 1 ? "Player 1's Turn" : "Player 2's Turn"}
      </header>
      {board.map((cell, ind) => <Cell key={ind} handleClick={handleClick} id={ind} status={cell} />)}
      {/* <table>
        <tbody>
          <tr>
            <Cell handleClick={handleClick} id={0} status={board[0]} />
            <Cell handleClick={handleClick} id={1} status={board[1]} />
            <Cell handleClick={handleClick} id={2} status={board[2]} />
          </tr>
          <tr>
            <Cell handleClick={handleClick} id={3} status={board[3]} />
            <Cell handleClick={handleClick} id={4} status={board[4]} />
            <Cell handleClick={handleClick} id={5} status={board[5]} />
          </tr>
          <tr>
            <Cell handleClick={handleClick} id={6} status={board[6]} />
            <Cell handleClick={handleClick} id={7} status={board[7]} />
            <Cell handleClick={handleClick} id={8} status={board[8]} />
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
