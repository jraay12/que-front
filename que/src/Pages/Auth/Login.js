import React from 'react'
import Input from "../../components/Input"
import Button from '../../components/Button'
const Login = () => {
  return (
   <div className='h-screen w-screen'>
    <div className='flex'>
      <div className='h-screen w-[60%] bg-background'></div>
      <div className='h-screen w-[50%] flex justify-center items-center'>
        <div className='min-h-[80%] w-[70%]'> 
          <div className='flex flex-col items-center gap-16'>
           <h1 className='font-bold text-5xl text-blue'>LOGIN</h1>
           <div className='w-full flex flex-col gap-5 text-blue'>
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
           <div className='w-32 rounded-lg flex justify-center font-bold bg-blue hover:bg-opacity-60 text-white text-lg py-2 mt-2'>
           <Button 
           buttonName = "Login"
           type = "submit"
           
           />
           </div>
            </div>

          </div>
        </div>
      </div>
    </div>
   
   </div>
  )
}

export default Login