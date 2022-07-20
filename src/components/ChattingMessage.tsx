import React from 'react'
import nomessage from "../images/other/nomessages.png";

function ChattingMessage() {
  return (
    <div className='container mt-5'>
<img src={nomessage} alt=""/>
<p className='mb-0'><b>You have no unread messages</b></p>
<p className='mb-0'>when you book a trip or experience</p>
<p className=''>Messages from your hosts will show here</p>
<button className='btn btn-outline-danger'>Explore HorseBnb</button>
    </div>
  )
}

export default ChattingMessage