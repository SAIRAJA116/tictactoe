import React,{useState} from 'react'
import Square from "./Square"

const Board = ({board,handleSquareClick}) => {  //Here the borad and handleSquareClick are the props send from the App.jsx and here we used the object destructuring to get them here we can also use props word there and also calll it as props.board and props.handlequareClick but destruturing is much more easier if we are having less number of props



  const renderSquare = (position)=>{
    return(
    <Square value={board[position]} onClick={()=>handleSquareClick(position)} />
    )
  }

  return (
    <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}

        </div>
    </div>
  )
}

export default Board