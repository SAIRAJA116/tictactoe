import React,{useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helpers"
import "./styles/root.scss";
export default () => {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXnext,setIsXnext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner} `: `Next Player is ${isXnext ? 'X' : 'O' }`;
  
  


  const handleSquareClick = (position)=>{

    if(board[position] || winner){
      return;
    }

    setBoard((prev)=>{
      return prev.map((square,pos)=>{
        if(pos==position){
          if(isXnext){
            return 'X'
          }else{
            return 'O'
          }
          
        }
        return square
      })
      
    });

    setIsXnext((prev)=>{
      return !prev
    }) 
  };
  return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handleSquareClick = {handleSquareClick} />

  </div>
  );
  };
