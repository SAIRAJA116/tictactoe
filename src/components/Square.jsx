import React from 'react'
import "./Square.style.css"
const Square = (props) => {
  return (
    <button className='square' onClick={props.onClick} >{props.value}</button>
  )
}

export default Square