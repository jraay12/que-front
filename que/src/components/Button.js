import React from 'react'

const Button = (props) => {
  return (
    <>
      <button type={props.type}  onClick={props.onClick} className={`select-none w-full h-full ${props.className}`} >{props.buttonName} </button>
    </>
  )
}

export default Button