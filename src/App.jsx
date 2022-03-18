import React,{useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helpers"
import "./styles/root.scss";
export default () => {
  const [history,setHistory]=useState([{board:Array(9).fill(null),isXnext:false}]);
  const [currentMove,setCurrentMove] = useState(0)

  const current = history[currentMove] 


  const winner = calculateWinner(current.board);
  const message = winner ? `Winner is ${winner} `: `Next Player is ${current.isXnext ? 'X' : 'O' }`;
  
  


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
  return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={current.board} handleSquareClick = {handleSquareClick} />

  </div>
  );
  };
