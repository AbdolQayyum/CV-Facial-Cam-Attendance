import React from 'react';
import '../styles/welcomeStyles.css'
import { Outlet,useNavigate } from "react-router-dom";


export default function WelcomePage() {
  const navigate = useNavigate();

  function enroll(){
    navigate('/enrollStudent')
  }
  function TakeAttendance(){
    navigate('/AttendanceTaking')
  }
 
  return (
    <>
      
        <div class='body'>
         
          <h1 class='heading' >Welcome to Face Recognition-Based Attendance System</h1> 
          <button class='enroll' onClick={enroll}>Enroll New Student</button>
              <button class = 'takeAttendance' onClick={TakeAttendance}>Take Attendance</button>
         

        </div>
     

      <Outlet />
    </>
   
  )
}
