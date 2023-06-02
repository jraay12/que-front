import React from 'react'
import Input from "../../components/Input"
const Login = () => {
  return (
   <div className='h-screen w-screen'>
    <div className='flex'>
      <div className='h-screen w-[60%] bg-background'></div>
      <div className='h-screen w-[50%] flex justify-center items-center'>
        <div className='min-h-[70%] w-[70%]'> 
          <div className='flex flex-col items-center gap-10'>
           <h1 className='font-bold text-3xl'>LOGIN</h1>
           <div className='w-full flex flex-col gap-5'>
           <Input 
            label = "Email"
            type = "email"
            placeholder = "Email"
           />
           <Input 
            label = "Password"
            type= "password"
            placeholder = "password"
           />
            </div>

          </div>
        </div>
      </div>
    </div>
   
   </div>
  )
}

export default Login