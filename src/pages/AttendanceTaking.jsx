import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/AttendanceTaking.css';

export default function AttendanceTaking() {
  const [msg, setMsg] = useState('')
  
  const TakeAttendance = () => {
    
  
    axios.post("/start", {headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }})
      .then(response => {
        console.log("response:", response.data.message);
        setMsg(response.data.message)
        
       
      })
      .catch(error => {
        console.error("Error is :", error);
      });
  };
  
  
  return (
    <div className="container">
      <button onClick={TakeAttendance}>Take Attendance</button>
      <h3>{msg}</h3>
    </div>
  );
}
