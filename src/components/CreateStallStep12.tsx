import React from 'react'
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateStallStep12() {
    const [startDate, setStartDate] = useState(new Date())
//     const onChangeDateHandler=(e)=>{
// console.log(e)
//     }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-5'>
            <DatePicker
             selected={startDate} 
             onChange={ date1 => setStartDate(date1!) }
                />
            </div>
        </div>
    </div>
  )
}

export default CreateStallStep12