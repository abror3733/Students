import React, { useState } from 'react'
import sortIcon from "../../../assets/Images/sort.svg"
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'


function HomePage({student,setStudent}) {
  const navigate = useNavigate()
  const handleDeleteBtn = (e)=>{
    const clikedId =e.target.id
    const finedStudent = student.findIndex(item=>item.id ==clikedId)
    student.splice(finedStudent,1)
    setStudent([...student])
    toast.success("Ma'lumot o'chirildi!")
  }
  const handleSinglePage =(e)=>{
    navigate("/student")
  }
 

  return (
    <>
    <div className="flex items-center justify-between px-[30px] pt-[12px] pb-[15px]">
    <Toaster position="top-center" reverseOrder={false} />
    <h2 className="text-[22px] font-bold">Students List</h2>
    <div className="flex space-x-[30px] items-center">
    <button>
    <img src={sortIcon} alt="sort-icon" width={14} height={22} />
    </button>
    <Link to={'/add'} className="w-[189px] rounded-md text-center pt-[14px] pb-[12px] text-white text-[14px] bg-[#FEAF00] hover:opacity-70">
    ADD NEW STUDENT
    </Link>
    </div>
    </div>
    <span className="bg-[#E5E5E5] w-[95%] mx-auto h-[3px] px-[30px] block"></span>

    <div className='px-7 pt-4'>
    <table className="w-full">
     <thead>
      <tr>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>ID</th>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>User Image</th>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>Name</th>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>Email</th>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>Phone Number</th>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>Enroll Number</th>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>CreateAt</th>
        <th className='bg-[#F2EAE1] px-2 py-4 text-slate-500'>Action</th>
      </tr>
     </thead>
     <tbody>
      {student.map(item=>(
        <tr className='even:bg-[#E5E5E5]' key={item.id} >
          <td className='p-2 text-center'>{item.id}</td>
          <td className='p-2 text-center'>
            <img className='rounded-md' src={item.avatarImg} alt="avatar img" width={60} height={40} />
          </td>
          <td className='p-2 text-center'>{item.name}</td>
          <td className='p-2 text-center'>{item.email}</td>
          <td className='p-2 text-center'>{item.phoneNumber}</td>
          <td className='p-2 text-center'>{item.enrollNumber}</td>
          <td className='p-2 text-center'>{item.createdAt}</td>
          <td className='p-2 text-center space-x-2'>
            <button onClick={handleSinglePage} className='px-3 py-2 rounded-md text-[13px] hover:opacity-55 text-white bg-[#FEAF00]'>More</button>
            <button id={item.id} onClick={handleDeleteBtn} className='px-3 py-2 rounded-md text-[13px] hover:opacity-55 text-white bg-red-600'>Delete</button>
          </td>
        </tr>
      ))}
     </tbody>
    </table>
    </div>
   
    </>
  )
}

export default HomePage