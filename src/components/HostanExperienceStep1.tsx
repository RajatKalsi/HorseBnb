import React from 'react'
import experience from "../images/other/experience.png";
import {Link} from 'react-router-dom'
import InitMap from './GoogleMap';

function HostanExperienceStep1() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5">
                        <p className='font-size'>Started Creating your Horse Adventure !</p>
                        <p>Please create a catchy a descriptive title for your listing.This is the first thing Potential Guests will see so try and stand out from the crowd</p>
                    <p>Please enter Title</p>
                    <form>
                        <input type="text" placeholder="Title" className='form-control'/>
                        <button className='btn btn-success border-0 shadow-none mt-4'><Link to="/hostexperiencelocation"><span className='text-white'>Continue</span></Link></button>
                    </form>

                    </div>
                    <div className="col-5 ms-auto">
                        <img src={experience} alt=""/>
                    </div>
                    <div><InitMap/></div>
                </div>
            </div>
        </div>
    )
}

export default HostanExperienceStep1