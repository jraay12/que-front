import React from 'react'
import Input from "./Input"
import Button from "./Button"
import {useNavigate} from "react-router-dom"

const AddQueFormGuest = () => {

    const navigate = useNavigate()
    
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-background backdrop-blur-lg absolute '>
        <div className='container bg-slate-300 flex flex-col xxl:h-[40%] shadow-2xl drop-shadow-2xl h-[80%] xl:h-[65%] w-[40%] xxl:w-[30%] rounded-3xl'>
            <div className='flex mt-10 items-center flex-col'>
                <h1 className='font-extrabold md:text-lg lg:text-2xl xl:text-4xl'>Add Queue</h1>
            </div>
            <div className='flex justify-start  mt-2 mx-10'>
                <Input 
                label="Guest Name"
                py={3}
                />
            </div>
            <div className='flex justify-start  mt-4 mx-10'>
                <Input 
                label="Guest Email"
                py={3}
                />
            </div>
            <div className='flex justify-start  h-36 mt-4 mx-10'>
                <Input 
                label="Purpose"
                
                />
            </div>
            <div className='flex justify-evenly gap-4 '>
            <div className='bg-blue hover:bg-red-600 text-white rounded-2xl'>
                    <Button 
                    buttonName = "Cancel"
                    onClick = {() => navigate("/Dashboard")}
                    />
                </div>
                <div className='bg-blue text-white rounded-2xl'>
                    <Button 
                    buttonName = "Submit"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddQueFormGuest