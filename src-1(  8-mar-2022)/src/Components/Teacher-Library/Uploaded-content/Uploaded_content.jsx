import React from 'react'
import "./Uploaded.css"
import {BsFillCalendarDateFill} from "react-icons/bs"
import { Link,Outlet } from 'react-router-dom'

const Uploaded_content = () => {
  return (
    <>
        <div className='Uploaded'>
            <h3>Select Date(Optional) : <input type="date" value=" "/></h3> 
            <BsFillCalendarDateFill size={40}/> 
        </div>
        <select className='Uploaded-select'>
            <option>Select Subject</option>
            <option>English</option>
            <option>Maths</option>
            <option>Science</option>
        </select>
        <div className='Uploaded-button'><Link to="Apply-Filter"><button >Apply Filter</button></Link></div>
        <Outlet/>
    </>
  )
}

export default Uploaded_content