
import React from 'react'
import avatarImg from "./assets/Images/avatar.png"
import studentsIcon from "././assets/Images/students-icon.svg"
import logoutIcon from "././assets/Images/logout-icon.svg"
import playIcon from "././assets/Images/play.svg"
import belIcon from "././assets/Images/bell.svg"
import search from "././assets/Images/search.svg"
import sortIcon from "././assets/Images/sort.svg"
import StudentList from './components/StudentList/StudentList'


function Authentication() {
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
       <div className="flex items-center justify-between px-[30px] pt-[12px] pb-[15px]">
          <h2 className="text-[22px] font-bold">Students List</h2>
          <div className="flex space-x-[30px] items-center">
            <button>
              <img src={sortIcon} alt="sort-icon" width={14} height={22} />
            </button>
            <button className="w-[189px] rounded-md pt-[14px] pb-[12px] text-white text-[14px] bg-[#FEAF00] hover:opacity-70">
              ADD NEW STUDENT
            </button>
          </div>
        </div>
        <span className="bg-[#E5E5E5] w-[95%] mx-auto h-[3px] px-[30px] block"></span>
       </div>
       <div className="py-[21px] px-[70px] flex items-center justify-evenly">
        <span className="text-[#ACACAC]">Name</span>
        <span className="text-[#ACACAC]">Email</span>
        <span className="text-[#ACACAC] ml-[90px]">Phone</span>
        <span className="text-[#ACACAC]">Enroll Number</span>
        <span className="text-[#ACACAC]">Date  admission</span>
       </div>
       <div className="px-[30px] flex flex-col space-y-2">
        <StudentList/>
        <StudentList/>
        <StudentList/>
        <StudentList/>
       </div>
      </div>
    </div>
  )
}

export default Authentication