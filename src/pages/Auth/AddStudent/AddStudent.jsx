import React, { useState } from 'react'
import chooseImg from "../../../assets/Images/card-image.svg"
import closeIcon from "../../../assets/Images/x-square-fill.svg"
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function AddStudent({student,setStudent}) {
  const [imgUrl, setImgUrl] = useState(null)
  const navigate = useNavigate()

  const date = new Date()
  const timeDate = (date.getDate().toString().padStart(2,0) + "-" + (date.getMonth() + 1).toString().padStart(2,0) + "-" + date.getFullYear())
  const handleSubmitStudent = (evt)=>{
    evt.preventDefault()
    const data = {
      id:student.length ? student[student.length - 1].id + 1 : 1,
      avatarImg:imgUrl,
      name:evt.target.name.value,
      email:evt.target.email.value,
      phoneNumber:evt.target.phoneNumber.value,
      enrollNumber:evt.target.enrollNumber.value,
      createdAt:timeDate,
    }
    setTimeout(() => {
      navigate("/")
    }, 1000);
    toast.success("Ma'lumot qo'shildi!")
    setStudent([...student,data])
   
  }
  const chooseChangeImg =(e)=>{
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <form onSubmit={handleSubmitStudent} className='w-[80%] flex flex-col bg-[#F2EAE1] p-5 rounded-md mx-auto mt-[50px]'>
        <Toaster position="top-center" reverseOrder={false} />
      <h2 className='text-[34px] font-semibold text-center text-[#535252]'>Add Student</h2>
      <div className='flex items-start justify-between pt-5 relative'>
        <button onClick={()=> navigate('/')} className='absolute right-0 top-[-50px] cursor-pointer'>
        <img className='hover:opacity-55' src={closeIcon} alt="close"  width={30} height={30}/>
        </button>
      <div className='w-[45%] flex flex-col space-y-[30px]'>
        <label className='flex flex-col space-y-1'>
          <span className='text-[17px] text-slate-400'>Name</span>
          <input name='name' className='px-3 py-2 rounded-md outline-none focus:shadow-md focus:shadow-[#FEAF00]' type="text" placeholder='Enter your name' required/>
        </label>
        <label className='flex flex-col space-y-1'>
          <span className='text-[17px] text-slate-400'>Email</span>
          <input name='email' className='px-3 py-2 rounded-md outline-none focus:shadow-md focus:shadow-[#FEAF00]' type="email" placeholder='Enter your email' required/>
        </label>
        <div className='flex  space-x-[60px] space-y-1 mt-5'>
          <label>
          <span className='cursor-pointer ml-[30px] text-[22px] hover:text-black transition-[0.4s] text-slate-400'>Choose img</span>
          <img className='cursor-pointer ml-[60px]' src={chooseImg} alt="Choose img" width={60} height={60} />
          <input onChange={chooseChangeImg} name='file' className='px-3 py-2 rounded-md outline-none focus:shadow-md focus:shadow-[#FEAF00] visually-hidden' type="file" placeholder='Enter your enroll number' required/>
          </label>
          {imgUrl ? 
           <img src={imgUrl} alt="img" width={120} height={80} />
          :""}
        </div>
      </div>
      <div className='w-[45%] flex flex-col space-y-[30px]'>
        <label className='flex flex-col  space-y-1'>
          <span className='text-[17px] text-slate-400'>Phone Number</span>
          <input name='phoneNumber' className='px-3 py-2 rounded-md outline-none focus:shadow-md focus:shadow-[#FEAF00]' type="tel" defaultValue={"+9989"} maxLength={"13"} placeholder='Enter your phone number' required/>
        </label>
        <label className='flex flex-col space-y-1'>
          <span className='text-[17px] text-slate-400'>Enroll Number</span>
          <input name='enrollNumber' className='px-3 py-2 rounded-md outline-none focus:shadow-md focus:shadow-[#FEAF00]' type="number" placeholder='Enter your enroll number' required/>
        </label>
        <button type='submit' className='w-[100%] py-2 px-3 rounded-md text-white font-semibold hover:opacity-55 bg-[#FEAF00]'>Submit</button>
      </div>
      </div>
    </form>
  )
}

export default AddStudent