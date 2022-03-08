import React from 'react'
import "./Apply.css"
const tablecontext=[
    {
        name: "Student-1",
        Date:"27/9/21",
        class:"10",
        completion:"50%"
    },
    {
        name: "Student-2",
        Date:"27/9/21",
        class:"10",
        completion:"60%"
    },
    {
        name: "Student-3",
        Date:"27/9/21",
        class:"10",
        completion:"70%"
    },
    {
        name: "Student-4",
        Date:"27/9/21",
        class:"10",
        completion:"80%"
    }
  ]
const Apply = () => {
  return (
    <div>
        <center>
        <table className='Apply-table'>
            <thead>
                  <tr>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Class</th>
                    <th>Completion</th>
                  </tr>
              </thead>
              <tbody>
                  {
                     tablecontext.map((i)=>{
                       return(
                         <tr>
                           <td>{i.name}</td>
                           <td>{i.Date}</td>
                           <td>{i.class}</td>
                           <td>{i.completion}</td>
                         </tr>
                       )
                     })
                  }
              </tbody>
            </table>
        </center>
    </div>
  )
}

export default Apply