import React from 'react'
import "./Square.style.css"
const Square = (props) => {
  return (
    <button className={`square ${props.isWinningSquare?'winning':''} ${props.value==='X'?'text-green':'text-orange'}`} onClick={props.onClick} style={{
      fontWeight: props.isWinningSquare ?'bold':'normal',
    }} >{props.value}</button>
  )
}

export default Square

// const Square = (props) => {
//   return (
//     <button className={`
//       ${props.isWinningSquare?'winning':''} ${props.value==='X'?'text-green':'text-orange'}
//     `} onClick={props.onClick}  >{props.value}</button>
//   )
// }
