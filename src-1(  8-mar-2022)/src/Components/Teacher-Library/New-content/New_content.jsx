import React from 'react'
import './New-content.css'
import {BsFillCalendarDateFill} from "react-icons/bs"
import {AiOutlineFilePdf}from 'react-icons/ai'
const New_content = () => {
  return (
   <>
    <h3>Upload New Content</h3>
    <div className="New-content">
    <div className='New-div'>
      <select className='New-Uploaded-select'>
            <option>Select Class</option>
            <option>10-th</option>
            <option>11-th</option>
            <option>12-th</option>
        </select>
        <select className='New-Uploaded-select'>
            <option>Select Subject</option>
            <option>English</option>
            <option>Maths</option>
            <option>Science</option>
        </select>
        <select className='New-Uploaded-select'>
            <option>Select Subject</option>
            <option>English</option>
            <option>Maths</option>
            <option>Science</option>
        </select>
    </div>
    <div className='New-Uploaded'>
            <h3>Date of Publishing : <input type="date" value=" "/></h3> 
            <BsFillCalendarDateFill size={40}/> 
    </div> 
    <div className='New-Uploaded'>
            <h3>Tutorial PDF : <input type="file" accept='application/pdf'/></h3> 
            <AiOutlineFilePdf size={40}/> 
    </div> 
    <div className='New-checkbox'>
      <pre>
      <input type="checkbox" />  Notify Class ?
      </pre>
    </div>
    <button>Upload</button>
    </div>
   </>
  )
}

export default New_content