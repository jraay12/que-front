import React from 'react'

const Button = (props) => {
  return (
    <>
      <button type={props.type}  onClick={props.onClick} className='select-none' >{props.buttonName} </button>
    </>
  )
}

export default Button