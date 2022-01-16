import React from 'react'
import SideInfo from './SideInfo'
import { useState } from 'react';


function Form({addStudent}) {

  const [student,setStudent]= useState ({}) ;

  const handelChange = (e) =>{
  setStudent({...student,[e.target.name]:e.target.value});
  }
    
  const handelSubmit = (e) =>{
  e.preventDefault();
  addStudent(student);
  }

  
    return (
        <div className="form-page">

            <form onSubmit={handelSubmit}>
                <input name ="name" onChange={handelChange}/>name
                <input name = "lastName" onChange={handelChange}/>lastName
                <input name = "phoneNumber" onChange={handelChange}/>phoneNumber
                <input name = "power" onChange={handelChange}/>power (in three words)
                <input name = "emailAddress" onChange={handelChange}/>emailAddress
                <button type="submit"> Submit</button>
            </form>
            <SideInfo />

        </div>
    )
}

export default Form
