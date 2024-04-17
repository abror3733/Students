import React from 'react'
import DeleteIcon from "../../assets/Images/deleteIcon.svg"
import ProfileImg from "../../assets/Images/profile.png"


function StudentList() {
  return (
    <div className="bg-white py-[12px] px-[13px] rounded-md flex items-center justify-between">
      <div className="flex items-center space-x-[50px]">
        <img className="rounded-md" src={ProfileImg} alt="img" width={65} height={55} />
        <span className="text-[14px]">Karthi</span>
      </div>
      <div className="flex items-baseline space-x-[80px]">
        <span className="text-[14px]">karthi@gmmail.com</span>
        <span className="text-[14px]">7305477760</span>
        <span className="text-[14px]">1234567305477760</span>
        <span className="text-[14px]">08-Dec, 2021</span>
      </div>
      <button>
        <img src={DeleteIcon} alt="delete-icon" width={16} height={18} />
      </button>
    </div>
  )
}

export default StudentList