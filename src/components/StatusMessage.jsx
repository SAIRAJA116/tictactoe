import React from 'react'

const StatusMessage = ({winner,current}) => {

    const noMovesLeft = current.board.every((el)=> el!==null)

    let message;
    if(winner){
        message = <>Winner is <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span> </>
    }else{
        if(noMovesLeft){
            message = <><span className='text-green'>X</span> and <span className='text-orange'>O</span> are tied</>
        }else{
            message = <>Next Player is <span className={winner==='X'?'text-green':'text-orange'}>{current.isXnext ? 'X' : 'O' }</span></>
        }
    }

  return (
    <div className='status-message'>{message}</div>
  )
}

export default StatusMessage