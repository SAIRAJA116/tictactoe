import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import {calculateWinner} from "./helpers"
import "./styles/root.scss";
export default () => {

  const NEW_GAME = [{board:Array(9).fill(null),isXnext:false}]

  const [history,setHistory]=useState(NEW_GAME);
  const [currentMove,setCurrentMove] = useState(0)

  const current = history[currentMove] 


  const {winner,winningSquares} = calculateWinner(current.board);
  
  


  const handleSquareClick = (position)=>{

    if(current.board[position] || winner){
      return;
    }

    setHistory((prev)=>{

      const last = prev[prev.length-1]

      const newboard =  last.board.map((square,pos)=>{
        if(pos==position){
          if(last.isXnext){
            return 'X'
          }else{
            return 'O'
          }
          
        }
        return square
      });
      

      

      return prev.concat({board:newboard,isXnext:!last.isXnext})
      
    });

    setCurrentMove((prevmove)=>{
      return prevmove+1
    })

  };

  const moveTo = (move)=>{
    setCurrentMove(move)
  }

  const startNewGame = () => {
    setHistory(NEW_GAME)
    setCurrentMove(0)
  }

  return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <StatusMessage current = {current} winner = {winner}  />
    <Board board={current.board} handleSquareClick = {handleSquareClick} winningSquares={winningSquares} />
    <button type="button" onClick={startNewGame}>Start New Game</button>
    <History  history={history} moveTo = {moveTo} currentMove={currentMove} />

  </div>
  );
  };
