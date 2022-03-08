import React from "react";
import "./discussionForums.css";
import { NavLink } from "react-router-dom";
import {HiUser}  from "react-icons/hi"
const Tester=[
  {
    name:"Tester_101",
    time:"1hr ago",
    text:"lorem dk dhdj ddl .... ?"
  },
  {
    name:"Tester_101",
    time:"2hr ago",
    text:"lorem dk dhdj ddl sjhlvjk egujke eie eiuei .... ?"
  },
  {
    name:"Tester_101",
    time:"3hr ago",
    text:"lorem dk dhdj ddl wgfk uyfuy366f3y3 uyuf3uy3 y .... ?"
  },
  {
    name:"Tester_101",
    time:"4hr ago",
    text:"lorem dk dhdj ddl wfggw 3y3y3y wyeye eyegc ti3u .... ?"
  }
]
function DiscusssionForums() {
  return (
    <>
      <div className="discussionForums">
     <center>
       <p id="p1"><input type="text" /></p>
       <p id="p2"><textarea rows="10" cols="20"></textarea></p>
     </center>
    </div>
    <div> 
       <h2>Recently posted</h2>
       {
          Tester.map((i)=>{
            return(
              <div className="post">
                <HiUser size={50}/>
                <div>
                <h3>{i.name}</h3>
                <p>{i.time}</p>
                <p>{i.text}</p>
                <NavLink to="/discussion-forum/Answers"><button>Answer</button></NavLink>
                </div>
              </div>
            )
          })
       }
       
    </div>
    </>
  );
}

export default DiscusssionForums;
