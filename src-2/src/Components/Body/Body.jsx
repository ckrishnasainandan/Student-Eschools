import React from "react";
import "./body.css";
import { Routes, Route } from "react-router-dom";
import LiveClasses from "../LiveClasses/LiveClasses";
import DiscusssionForums from "../DiscussionForums/DiscusssionForums";
import Reports from "../Reports/Reports";
import ReportsInner from "../ReportsInner/ReportsInner";
import UserP from "../Student-User-Profile/User_profile";
import UserE from "../Student-User-Profile/User_Edit";
//import UserL from "../User-Library/User_library";
import Assesment from "../Assesment/Assesment";
import Notices from "../Notices/Notices";
import {FaUserPlus} from "react-icons/fa"


// import Treports from "../Teacher-Reaports/Treports";
// import Myreport from "../Teacher-Reaports/My_report";
// import Evalution from "../Teacher-Reaports/Evalution";
// import Gevalution from "../Teacher-Reaports/Go-To-Evalution/Go_to_evalution";
// import ADash from "../Teacher-Reaports/Go-To-Evalution/Assess/Assessment_dash";
// import Student from "../Teacher-Reaports/Go-To-Evalution/Assess/Student/Student";
// import Over from "../Teacher-Reaports/Go-To-Evalution/Over_All/Over_All";

//Admin-Reports
import Areports from "../Admin-Reports/Admin_reports";
import CEvollution from "../Admin-Reports/Class/CEvollution";
import SEvolution from "../Admin-Reports/School/SEvolution";
import TEvolution from "../Admin-Reports/Teacher/TEvolution";
import GAEvolution from "../Admin-Reports/Class/Go-to-AEvlution/Go_to_AEvolution";
import Admin_Assess from "../Admin-Reports/Class/Go-to-AEvlution/Admin-Assess/Admin_Assess";
import Admin_overAll from "../Admin-Reports/Class/Go-to-AEvlution/Admin-overall/Admin_overAll";
import AStudent from "../Admin-Reports/Class/Go-to-AEvlution/Admin-Assess/Admin-Student/AStudent";

//Teacher-Library
import Tlibrary from "../Teacher-Library/Tlibrary"; 
import Ucontent from "../Teacher-Library/Uploaded-content/Uploaded_content";
import Ncontent from "../Teacher-Library/New-content/New_content";
import Apply from "../Teacher-Library/Uploaded-content/Apply-filter/Apply";

//Discussion-fourm
import Answer from "../DiscussionForums/Answer_Fourm";
function Body() {
  return (
    <div className="Body">
      <div className="Head">
        <p className="module-for">Student Dashboard</p>
        <p className="p-icon"><FaUserPlus size={40}/></p>
      </div>

      <div className="body-content">
        <Routes>
          <Route path="/user-profile" element={<UserP/>}/>
          <Route path="/user-profile/Edit" element={<UserE/>}/>
          
          {/* below is for Teacher-Library  */}
          <Route path="/library" element={<Tlibrary/>}/>
          <Route path="/library/Uploaded-content" element={<Ucontent/>}>
              <Route path="Apply-Filter" element={<Apply/>}/>   
          </Route>
          <Route path="/library/Create-New" element={<Ncontent/>}/>

          <Route path="/notices" element={<Notices/>}/>
          <Route path="/assessment" element={<Assesment/>}/>
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/discussion-forum" element={<DiscusssionForums />} />
          <Route path="/discussion-forum/Answers" element={<Answer/>}/>
          
          {/* below is for Teacher-Reports  */}
          {/* <Route exact path="reports" element={<Reports/>}/> */}
          {/* <Route exact path="reports" element={<Treports />}/>
          <Route path="reports/my-report" element={<Myreport/>}/>
          <Route path="reports/Evalution" element={<Evalution/>}/>
          <Route path="reports/Evalution/Go-Evalution" element={<Gevalution/>}>
              <Route path="Assessment-dash" element={<ADash/>}/>  
              <Route path="Student" element={<Student/>}/> 
              <Route path="Over-All" element={<Over/>}/>  
          </Route> */}
         
         {/* Below is for Admi-Reports */}
          <Route path="reports" element={<Areports/>}/>
          <Route path="/reports/my-report" element={<SEvolution/>}/>
          <Route path="/reports/Teacher-Evalution" element={<TEvolution/>}/>
          <Route path="/reports/Class-Evalution" element={<CEvollution/>}/>
          <Route path="/reports/Evalution/Go-Admin-Evalution" element={<GAEvolution/>}>
            <Route path="Admin-Assessment-dash" element={<Admin_Assess/>}/>
            <Route path="Admin-Over-All" element={<Admin_overAll/>}/>
            <Route path="Admin-Student" element={<AStudent/>}/>
          </Route>


          <Route path="/reports/subject" element={<ReportsInner />} />
        </Routes>
      </div>
    </div>
  );
}

export default Body;
