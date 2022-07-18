import React from "react";

function HorseAdventures() {
  return (
    <div>
      <div className="container mt-5">
        <b>
          <p className="text-start mb-1">
            Horse Vacations and equestrains experience
          </p>
        </b>
        <p className="text-start">Equestrains Adventures</p>

        <div className="row">
          <div className="col-4">
            <img
              src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              height="200px"
              width="350px"
            />
          </div>
          <div className="col-4">
            <img
              src="https://img.etimg.com/thumb/msid-64611815,width-640,resizemode-4,imgsize-322041/memorable-day-at-work.jpg"
              alt=""
              height="200px"
              width="350px"
            />
          </div>
          <div className="col-4">
            <img
              src="https://5.imimg.com/data5/GK/SX/MY-38540305/white-horse-500x500.jpg"
              alt=""
              height="200px"
              width="350px"
            />
          </div>
        </div>
        <div className="row">
          <b>
            <p className="text-success text-start mt-4">
              Show all Hourse Adventures and Activities
            </p>
          </b>
        </div>
      </div>
    </div>
  );
}

export default HorseAdventures;
