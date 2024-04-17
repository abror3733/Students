import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Login({setToken}) {
  const newData = JSON.parse(window.localStorage.getItem("newToken")) || {newLogin:"abror"}
  const loginSubmit = (evt)=>{
    evt.preventDefault()
    const data = {
      login:evt.target.login.value,
      password:evt.target.password.value
    }
    if(data.login == newData.newLogin){
      toast.success('Muvoffaqiaytli kirdingiz!')
    }
    else{
      toast.error("Ma'lumotlar mos kelmadi !")
    }
    setTimeout(() => {
      setToken(data);
    }, 1000);
    window.localStorage.setItem("token",JSON.stringify(data))

  }
  return(
    <>
    <div className='bg-[#FEAF00] h-[100vh] mx-auto flex items-center justify-center'>
        <Toaster position="top-center" reverseOrder={false} />
      <div className='bg-[#FFFFFF] pt-[40px] pb-[20px] px-[30px] rounded-[17px] w-[37%] login-wrap'>
         <div className='flex items-center justify-center space-x-2'>
           <span className='bg-[#F8D442] w-[6px] h-[38px] block'></span>
           <h2 className='text-[36px] text-[#000000] font-bold'>Admin Students</h2>
         </div>
        <h3 className='mt-[40px] font-semibold text-[22px] uppercase text-center'>Sign In</h3>
        <h3 className='text-[#6C6C6C] text-[14px] text-center mt-[9px] mb-[50px]'>
          Enter your credentials to access your account
        </h3>
        <form onSubmit={loginSubmit}>
          <label className='flex flex-col space-y-[5px]'>
          <span className='text-[#6C6C6C] text-[16px] font-[500]'>Login</span>
          <input
            name='login'
            className='border-[#E5E5E5] border-[1px] pt-[14px] pb-[15px] pl-[15px] rounded-md focus:shadow-[#FEAF00] outline-none focus:shadow-md'
            type="text"
            placeholder="Enter your login"
            autocomplete="off"
          />
          </label>
          <label className='flex flex-col space-y-[5px] mt-[19px]'>
          <span className='text-[#6C6C6C] text-[16px] font-[500]'>Password</span>
          <input
            className='border-[#E5E5E5] border-[1px] pt-[14px] pb-[15px] pl-[15px] rounded-md focus:shadow-[#FEAF00] outline-none focus:shadow-md'
            required
            name='password'
            type="password"
            placeholder="Enter your password"
            autocomplete="off"
          />
          </label>
          <button className='mt-[35px] bg-[#FEAF00] text-white text-[16px] rounded-md uppercase pt-[10px] pb-[11px] w-full hover:opacity-70 transition-[0.6s]' type="submit">
            SIGN IN
          </button>
          <Link className='mt-4 block text-center' to={"/sign-up"}>
          Sign Up
          </Link>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login