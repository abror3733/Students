
import React, { useState } from 'react'
import avatarImg from "./assets/Images/avatar.png"
import studentsIcon from "././assets/Images/students-icon.svg"
import logoutIcon from "././assets/Images/logout-icon.svg"
import playIcon from "././assets/Images/play.svg"
import belIcon from "././assets/Images/bell.svg"
import search from "././assets/Images/search.svg"
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Auth/HomePage/HomePage'
import AddStudent from './pages/Auth/AddStudent/AddStudent'
import SinglePage from './pages/Auth/SinglePage/SinglePage'


function Authentication() {

  const [student,setStudent] = useState(JSON.parse(window.localStorage.getItem("student"))||[
    {
      id:1,
      avatarImg:avatarImg,
      name:"Doniyor",
      email:"doniyor@gmail.com",
      phoneNumber:"+998951234567",
      enrollNumber:"1234567",
      createdAt:"12-04-2024",
    },{
      id:2,
      avatarImg:avatarImg,
      name:"Nodir",
      email:"nodir@gmail.com",
      phoneNumber:"+998951234567",
      enrollNumber:"1234567",
      createdAt:"12-04-2024",
    }
  ])
 window.localStorage.setItem("student" ,JSON.stringify(student))
  return (
    <div className="container mx-auto flex bg-[#F8F8F8]">
      <div className="flex flex-col justify-between pb-[20px] overflow-y-auto bg-[#F2EAE1] w-[22%] h-[100vh] pt-[18px] px-[35px]">
        <div>
           <div className='flex items-center justify-center space-x-2 mb-[50px]'>
             <span className='bg-[#F8D442] w-[5px] h-[28px] block'></span>
             <h2 className='text-[20px] text-[#000000] font-bold'>Admin Students</h2>
           </div>
           <div>
            <img className="rounded-[50%] mx-auto" src={avatarImg} alt="avatar-img" width={120}   height={120}/>
            <h3 className="font-bold text-[17px] mt-3 text-center">Karthi Madesh</h3>
            <span className="text-[#FEAF00] text-[14px] block text-center">Admin</span>
           </div>
           <button className="pt-[13px] pb-[11px] w-[180px] rounded-md bg-[#FEAF00] flex space-x-3 items-center justify-center mt-[60px] mx-auto hover:opacity-70">
            <img src={studentsIcon} alt="students icon"  width={20}   height={16} />
            <span className="text-[14px]">Students</span>
           </button>
        </div>
        <button className="flex items-center space-x-4 mx-auto">
          <span className="text-[14px]">Logout</span>
          <img src={logoutIcon} alt="logout-icon" width={17}   height={17}/>
        </button>
      </div>
      <div className="w-[78%]">
        <div className="flex items-center justify-between pl-[30px] pr-[50px] pt-[12px] pb-[11px] bg-[#F2EAE1]">
          <img className="cursor-pointer" src={playIcon} alt="play-icon" width={18} height={18} />
          <div className="flex items-center space-x-[27px]">
             <div className="relative">
              <input className="pt-[9px] pb-[11px] pl-[13px] pr-[50px] bg-white rounded-md    outline-none focus:shadow-md focus:shadow-[#FEAF00]" type="text" 
               placeholder="Search..."/>
               <img className="absolute right-[14px] top-[15px]" src={search} alt="search-icon" width={16} height={16}/>
             </div>
             <img src={belIcon} alt="bel-icon" width={17} height={20}/>
          </div>
        </div>
       <div>
       </div>
       <Routes>
          <Route path='/' element={<HomePage student={student} setStudent={setStudent} />}/>
          <Route path='/add' element={<AddStudent student={student} setStudent={setStudent}/>}/>
          <Route path='/student' element={<SinglePage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Authentication