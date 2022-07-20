import React from 'react'
import logo from "../images/other/logo.svg";
import stallmain from "../images/other/stallmain.png";

function GetstartedHoststall() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark shadow">
                <div className="container-fluid">
                    <img src={logo} className="navbar-brand" alt="" />
                </div>
            </nav>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-4 mt-3'>
                        <h4><b>Hi, John Let's Get started listning your place</b> </h4>
                        <p className='mt-3'>Step 1</p>
                        <h4>What kind of place do you have?</h4>
                        <select className="form-select mt-3" aria-label="Default select example">
                            <option selected>Choose your Stalls</option>
                            <option value="1">Short terms stalls</option>
                            <option value="2">Monthly Board</option>
                        </select>
                        <div className='row mt-3'>
                            <div className='col-6 me-auto'>
                            <select className="form-select mt-2" aria-label="Default select example">
                            <option selected>For 1 stalls</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                            </div>
                            <div className='col-6 ms-auto'>
                            <select className="form-select mt-2" aria-label="Default select example">
                            <option selected>For 1 guests</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                            </div>
                        </div>
                       <input type="text" placeholder='Enter Your location' className='w-100 mt-4 p-1'/>
                       <button className='btn btn-success mt-3'>Continue</button>

                    </div>
                    <div className='col-7'>
                        <img src={stallmain} height="450px" width="700px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetstartedHoststall