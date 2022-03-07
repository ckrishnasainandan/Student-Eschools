import React from "react";
import "./body.css";
import { Routes, Route } from "react-router-dom";
import LiveClasses from "../LiveClasses/LiveClasses";
import DiscusssionForums from "../DiscussionForums/DiscusssionForums";
import Reports from "../Reports/Reports";
import ReportsInner from "../ReportsInner/ReportsInner";
import UserP from "../Student-User-Profile/User_profile";
import UserE from "../Student-User-Profile/User_Edit";
import UserL from "../User-Library/User_library";
import Assesment from "../Assesment/Assesment";
import Notices from "../Notices/Notices";
import {FaUserPlus} from "react-icons/fa"
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
          <Route path="/library" element={<UserL/>}/>
          <Route path="/notices" element={<Notices/>}/>
          <Route path="/assessment" element={<Assesment/>}/>
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/discussion-forum" element={<DiscusssionForums />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route path="/reports/subject" element={<ReportsInner />} />
        </Routes>
      </div>
    </div>
  );
}

export default Body;
