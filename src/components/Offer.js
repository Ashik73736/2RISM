import React from "react";
import "./Offer.css";
const Offer = () => {
  return (
    <section id="offers">
    <div className="offer-container">
      <div className="slider-container">
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://promos.makemytrip.com/appfest/xhdpi//Desktop-WorldCup-15Sep@2x.jpg?im=Resize=(134,134)"
              alt="Offer"
            />
            <div className="content">
              <h3>Cricket World Cup: Get your Train Tickets</h3>
              <p> With free cancellation starting from $1</p>
              <button>Book Now</button>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//united-116x116-26102023.jpg?im=Resize=(134,134)"
              alt="Offer"
            />
            <div className="content">
              <h3>United Airlines launches new offers</h3>
              <p> With free cancellation starting from $1</p>
              <button>Book Now</button>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//vietnam-116x116-02122022.jpg?im=Resize=(134,134)"
              alt="Offer"
            />
            <div className="content">
              <h3>New Honeymoon Packages on bookings above $5000</h3>
              <p> With free cancellation starting from $1</p>
              <button>Book Now</button>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//train04-116x116-06012021.jpg?im=Resize=(134,134)"
              alt="Offer"
            />
            <div className="content">
              <h3>TIKTIK Rails: Get your Train Tickets</h3>
              <p> With free cancellation starting from $1</p>
              <button>Book Now</button>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//116X116-icici-ih-13102023.jpg?im=Resize=(134,134)"
              alt="Offer"
            />
            <div className="content">
              <h3>Vacation Destination on discount with your ICICI</h3>
              <p> With free cancellation starting from $1</p>
              <button>Book Now</button>
            </div>
          </div>
          <div className="grid-item">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//flight123456.jpg?im=Resize=(134,134)"
              alt="Offer"
            />
            <div className="content">
              <h3>Independence Day : Salute to soldiers!</h3>
              <p> With free cancellation starting from $1</p>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div></section>
    
  );
};
export default Offer;
