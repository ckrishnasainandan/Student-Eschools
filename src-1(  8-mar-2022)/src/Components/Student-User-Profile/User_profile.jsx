import React from 'react'
import "./User_profile.css"
import UserD from './User_details'
//import UserE from './User_Edit'
import {NavLink} from "react-router-dom"
const User_profile = () => {
  return (
    <div className='user-head'>
        <UserD/>
        <NavLink to="/user-profile/Edit"><button>Edit User Profile</button></NavLink>
    </div>
  )
}

export default User_profile