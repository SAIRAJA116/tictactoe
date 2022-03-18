import React from 'react'

const StatusMessage = ({winner,current}) => {

    const noMovesLeft = current.board.every((el)=> el!==null)

    let message;
    if(winner){
        message = `Winner is ${winner} `
    }else{
        if(noMovesLeft){
            message = "X and O are tied"
        }else{
            message = `Next Player is ${current.isXnext ? 'X' : 'O' }`
        }
    }

  return (
    <h2>{message}</h2>
  )
}

export default StatusMessage