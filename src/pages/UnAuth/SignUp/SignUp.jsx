import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';




function SignUp({setSignUpData}) {
  const navigate = useNavigate()
  const signUpFormSubmit = (evt)=>{
    evt.preventDefault()
   
    const data ={
      newLogin:evt.target.newLogin.value,
      newPassword:evt.target.newPassword.value
    }
    toast.success("Ma'lumotlar yangilandi!")
    setTimeout(() => {
      setSignUpData(data);
      navigate('/')
    }, 1000);
    window.localStorage.setItem("newToken",JSON.stringify(data))
  }
  return (
    <>
    <div className='bg-[#FEAF00] h-[100vh] mx-auto flex items-center justify-center'>
    <Toaster position="top-center" reverseOrder={false} />
      <div className='bg-[#FFFFFF] py-[40px]  px-[30px] rounded-[17px] w-[37%] login-wrap'>
         <div className='flex items-center justify-center space-x-2'>
           <span className='bg-[#F8D442] w-[6px] h-[38px] block'></span>
           <h2 className='text-[36px] text-[#000000] font-bold'>Admin Students</h2>
         </div>
        <h3 className='mt-[40px] font-semibold text-[22px] uppercase text-center'>Sign Up</h3>
        <h3 className='text-[#6C6C6C] text-[14px] text-center mt-[9px] mb-[50px]'>
          Enter your credentials to access your account
        </h3>
        <form onSubmit={signUpFormSubmit}>
          <label className='flex flex-col space-y-[5px]'>
          <span className='text-[#6C6C6C] text-[16px] font-[500]'>Enter new Login</span>
          <input
            name='newLogin'
            className='border-[#E5E5E5] border-[1px] pt-[14px] pb-[15px] pl-[15px] rounded-md focus:shadow-[#FEAF00] outline-none focus:shadow-md'
            type="text"
            placeholder="Enter your Login"
          />
          </label>
          <label className='flex flex-col space-y-[5px] mt-[19px]'>
          <span className='text-[#6C6C6C] text-[16px] font-[500]'>Enter new Password</span>
          <input
            className='border-[#E5E5E5] border-[1px] pt-[14px] pb-[15px] pl-[15px] rounded-md focus:shadow-[#FEAF00] outline-none focus:shadow-md'
            required
            name='newPassword'
            type="password"
            placeholder="Enter your password"
            autocomplete="off"
          />
          </label>
          <button className='mt-[35px] bg-[#FEAF00] text-white text-[16px] rounded-md uppercase pt-[10px] pb-[11px] w-full hover:opacity-70 transition-[0.6s]' type="submit">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default SignUp