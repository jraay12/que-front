import React from 'react'


const Container = (props) => {
  return (
    <div className='min-w-[100px] container bg-white text-blue text-sm min-h-[70%] xl:pt-32 xxl:text-4xl flex-auto rounded-2xl flex gap-10 flex-col items-center text-left pt-5 hover:cursor-pointer' onClick={props.onClick}>
        <img src={props.image}/>
        <div className='flex flex-col justify-start'>
        <h1 className='font-bold text-lg '>{props.name}</h1>
        <h1 className=' text-md font-serif '><span className='font-bold'>Position</span> : {props.position}</h1>
        </div>
    </div>  
  )
}

export default Container