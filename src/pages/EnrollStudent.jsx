import React, { useState, useEffect } from 'react';
import axios from 'axios'


export default function EnrollStudent() {

    
  const [name, setname] = useState("")
  const [reg, setreg] = useState("")
  const [class1, setclass1] = useState("")
  


    
    const EnrollStudent = () => {
      const data = {
        name: name,
        reg: reg,
        class1: class1
      };
    
      axios.post("/add", data,{headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }})
        .then(response => {
          console.log("Enrollment successful:", response.data);
          
         
        })
        .catch(error => {
          console.error("Error enrolling student:", error);
        });
    };
    
    
  return (
      <div className='ui container'>
          <div className = "ui main"> 

          <h1>Comsats University Islamabad, Lahore Campus</h1>
          <form className='ui form'>
            <div className='field'>
            <label>Enter Student Name</label>
         <input type='text' placeholder='student name' onChange={e=>setname(e.target.value)} />

         <label>Enter Registration Number</label>
         <input type='text' placeholder='Registration Number' onChange={e=>setreg(e.target.value)}/>


        
         <label>Enter Class</label>
         <input type='text' placeholder='Class' onChange={e=>setclass1(e.target.value)} />

       
         <button onClick={EnrollStudent}>EnrollStudent</button>
    
            </div>
          </form>
          </div>

      
    </div>

  );
}
