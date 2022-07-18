import React from "react";

const Cardscomponent = () => {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-3">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd  */}
        <div className="col-3">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* 3ed */}
        <div className="col-3">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        {/* 4th */}

        <div className="col-3">
          <div className="card" style={{ width: "15rem" }}>
            <img
              src="https://a-z-animals.com/media/horse-3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardscomponent;
