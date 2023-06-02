import React from 'react'

const Button = (props) => {
  return (
    <>
      <button type={props.type}  onClick={props.onClick} >{props.buttonName} </button>
    </>
  )
}

export default Button