import React from 'react'
import logo from "../images/other/logo.svg";
import explore from "../images/other/readytolearn.png";
import './horsebnb.css'
import horseimg from "../images/other/seven.webp";
import checkcircle from "../images/other/checkcircle.png";

function HostStalls() {
  return (
    <div className=''>
        <nav className="navbar navbar-expand-sm navbar-dark shadow">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand" alt="" />
          <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4 mt-1 me-2">
              <button className="border-0 bg-success p-2 text-white">Get started</button>
            </li>
             </ul>
        </div>
      </nav>
    <img src={horseimg} alt="" className='w-100' height="400px"/>
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-4 shadow me-auto ms-5'>
                <h4 className='mt-3'>Why Host on <span className='text-danger'>HorseBnB</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores aut laudantium sapiente numquam perspiciatis, vero recusandae. Doloremque, distinctio blanditiis!</p>
            </div>
            <div className='col-4 shadow ms-auto me-5'>
                <h4 className='mt-3'>We have your<span className='text-danger'>Back</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores aut laudantium sapiente numquam perspiciatis, vero recusandae. Doloremque, distinctio blanditiis!</p>
            </div>
        </div>
<h3 className='text-center mt-5'><b>Hosting in 3 Steps</b></h3>
<div className='row mt-5 text-center'>
            <div className='col-3 shadow m-auto'>
                <img src={checkcircle} alt=""/>
                <h4 className='mt-3'>List your space for free </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores aut laudantium sapiente numquam perspiciatis, vero recusandae. Doloremque, distinctio blanditiis!</p>
            </div>
            <div className='col-3 shadow m-auto'>
                <img src={checkcircle} alt=""/>
            <p className='mt-2'><b >Decide how you want to host </b></p>    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores aut laudantium sapiente numquam perspiciatis, vero recusandae. Doloremque, distinctio blanditiis!</p>
            </div>
            <div className='col-3 shadow m-auto'>
                <img src={checkcircle} alt=""/>
                <p className='mt-2'><b >Welcome your first guest </b></p>  
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores aut laudantium sapiente numquam perspiciatis, vero recusandae. Doloremque, distinctio blanditiis!</p>
            </div>
          
        </div>
    </div>
    <div className='container-fluid bg-danger mt-5'>
        <div className='row'>
            <div className='col-5 mb-3 me-auto ms-5'><img alt="" className='w-100 mt-5' height="280px" width="300px" src={explore}/></div>
            <div className='col-4 ms-auto mt-5 p-3'>
                <h2 className='text-white mt-5'>Ready to Earn ?</h2>
                <button className='btn btn-primary p-2 border-0 shadow-none text-white mt-4'>Get started</button>
            </div>
        </div>
    </div>
    <h2 className='mt-5 text-center'>About HorseBnB</h2>
    <div className='container'>
    <div className='row mb-5 mt-5'>
        <div className='col-4 me-auto ms-5 border border-2 p-3'>
            <p><b>What is HorseBnB</b></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita at dicta quae quidem perspiciatis.</p>
        </div>
        <div className='col-4 ms-auto me-5 border border-2 p-3'>
            <p><b>What is Hosting?</b></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita at dicta quae quidem perspiciatis.</p>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default HostStalls