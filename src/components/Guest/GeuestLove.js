import React from "react";
import "./GuestLove.css";
function GeuestLove() {
  return (
    <div className="Gl">
      <div className="GlItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1" alt="ig" className="glImg" />
        <span className="glName">7 Seasons Appartment Budapest</span>
        <span className="glCity">Hungary Budapest</span>
        <span className="glPrice">Starting from $ 500</span>
        <div className="glRating">
          <button className="">8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="GlItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" alt="ig" className="glImg" />
        <span className="glName">6 continents Appartment by Prayagraj</span>
        <span className="glCity">Czech Republic</span>
        <span className="glPrice">Starting from $ 200</span>
        <div className="glRating">
          <button className="">8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="GlItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="ig" className="glImg" />
        <span className="glName">ApartHotel stare Miasto</span>
        <span className="glCity">Old town Poland</span>
        <span className="glPrice">Starting from $ 300</span>
        <div className="glRating">
          <button className="">8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default GeuestLove;
