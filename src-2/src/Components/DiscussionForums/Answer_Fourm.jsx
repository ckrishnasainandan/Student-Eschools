import React from 'react'
import {HiUser}  from "react-icons/hi"
const Tester_Answer=[
  {
    name:"Tester_101",
    time:"1hr ago",
    text:"The HTML <center> tag is used to center the text horizontally in the HTML document. Since this tag was removed in HTML5, it is recommended that you use the CSS text-align property to format the text horizontally in the document. This tag is also commonly referred to as the <center> element."
  },
  {
    name:"Tester_101",
    time:"2hr ago",
    text:"The HTML <center> tag is used to center the text horizontally in the HTML document. Since this tag was removed in HTML5, it is recommended that you use the CSS text-align property to format the text horizontally in the document. This tag is also commonly referred to as the <center> element."
  },
  {
    name:"Tester_101",
    time:"3hr ago",
    text:" Use the text-align: center; on a parent element to center align all the child elements inside it. They(child elements) do not have to be block level answers Top answer: Use a div to center the link .button { padding:1em; text-align: center; dis"
  },
  {
    name:"Tester_101",
    time:"4hr ago",
    text:" Use the text-align: center; on a parent element to center align all the child elements inside it. They(child elements) do not have to be block level ... 5 answers Top answer: Use a div to center the link .button { padding:1em; text-align: center; dis"
  }
]
const Answer_Fourm = () => {
  return (
    <center>
      <div className='Answer-div'>
          <div className='ques'>
            <h3>Tester_101</h3>
            <p>4hr ago</p>
            <p>lorem dk dhdj ddl wfggw 3y3y3y wyeye eyegc ti3u .... ?</p>
          </div>
          <h2>Answer...</h2>
          {
            Tester_Answer.map((i)=>{
              return(
                <div className='Ans'>
                <div id="d1"><HiUser size={50}/></div>
                <div>
                <h3>{i.name}</h3>
                <p>{i.time}</p>
                <p>{i.text}</p>
                </div>  
                </div>
              )
            })
          }
          <p id="p2"><textarea rows="10" cols="20"></textarea></p>
          <button>Submit</button>
      </div>
      
    </center>
  )
}

export default Answer_Fourm