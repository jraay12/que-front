import React from 'react'


const Container = (props) => {
  return (
    <div className='w-72 bg-white text-blue bg-opacity-50 h-96 rounded-lg flex gap-10 flex-col items-center text-left justify-center'>
        <img src={props.image}/>
        <div className='flex flex-col justify-start'>
        <h1 className='font-bold text-lg '>{props.name}</h1>
        <h1 className=' text-md font-serif '><span className='font-bold'>Status</span> : {props.status}</h1>
        </div>
    </div>
  )
}

export default Container