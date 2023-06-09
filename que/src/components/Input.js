import React from 'react'

const Input = (props) => {
  return (
    <div className='flex flex-col gap-2 w-screen'>
      <label className='font-serif text-xl md:text-[12px] leading-3 xxl:text-2xl'>{props.label}</label>
        <input className={`rounded-3xl px-2 py-${props.py}`} placeholder={props.placeholder} type={props.type} onChange={props.onChange}>{props.name}</input>
        
    </div>
  )
}

export default Input