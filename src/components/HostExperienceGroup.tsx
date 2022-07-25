import React from 'react'
import experience from "../images/other/experience.png";
function HostExperienceGroup() {
    return (
        <div className='section'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5">
                        <h3 className=''>Select Maximum group size</h3>
                        <p>Think about the group size that works best for your experience.Should it be small and intimate? Is it fun with a large Group? please note that HorseBnB has a one guest minimum which means that if only one person books your adventure. You'll still be expected to host</p>
                        <input type="number" className="form-control mt-3"/>
                    </div>
                    <div className="col-6 ms-auto">
                        <img src={experience} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostExperienceGroup