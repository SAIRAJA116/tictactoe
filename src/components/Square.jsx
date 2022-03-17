import React from 'react'
import "./Square.style.css"
const square = (props) => {
  return (
    <button className='square'>{props.value}</button>
  )
}

export default square