import React from 'react'
import './Tlibrary.css'
import {Link} from "react-router-dom"
const Access_content=[
  {
    course:"Material Completed",
    completion:"60%"
  },
  {
    course:"Material Completed",
    completion:"90%"
  },
  {
    course:"Science",
    completion:"80%"
  },
  {
    course:"Maths",
    completion:"70%"
  }
]


const Student_compl=[
  {
    course:"Aggregate",
    completion:"60%"
  },
  {
    course:"Science",
    completion:"90%"
  },
  {
    course:"Maths",
    completion:"80%"
  },
  {
    course:"Science",
    completion:"70%"
  }
]
const Tlibrary = () => {
  return (
    <>
    <div className='Tlibrary'>
        <div>
            <h3>Access Content Taught</h3>
            <table className='Tlibrary-table'>
              <thead>
                  <tr>
                    <th>Course</th>
                    <th>Completion</th>
                  </tr>
              </thead>
              <tbody>
                  {
                     Student_compl.map((i)=>{
                       return(
                         <tr>
                           <td>{i.course}</td>
                           <td>{i.completion}</td>
                         </tr>
                       )
                     })
                  }
              </tbody>
            </table>
        </div>
        <div>
          	<h3>Student Completions</h3>
            <table className='Tlibrary-table'>
            <thead>
                  <tr>
                    <th>Course</th>
                    <th>Completion</th>
                  </tr>
              </thead>
              <tbody>
                  {
                     Access_content.map((i)=>{
                       return(
                         <tr>
                           <td>{i.course}</td>
                           <td>{i.completion}</td>
                         </tr>
                       )
                     })
                  }
              </tbody>
            </table>
        </div>
    </div>
    <div className="button-library">
        <Link to="Uploaded-content"><button>View Uploaded Content</button></Link>
        <Link to="Create-New"><button>Create New Content</button></Link>
    </div>
    </>
  )
}

export default Tlibrary