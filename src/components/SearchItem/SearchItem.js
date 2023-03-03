import React, { useState, useEffect } from "react";
import "./SearchItem.css";
import { Data } from "../Data/Data";
import {useNavigate} from 'react-router-dom'


function SearchItem(props) {
  const [hotelData, setHotelData] = useState([]);
  // const location=useLocation();
  const navigate=useNavigate();
  let d=props.destination
  console.log(d);
  const hotelApi = () => {
    
    fetch(
      `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels?city=${d}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHotelData(data);
        console.log(data);
      });
  };
  useEffect(() => {
    hotelApi();
  }, []);

  return (
    <div className="searchItem">
      {Data.map((img) => {
        return img.city === props.destination ? (
          <img src={img.imgUrl} className="siImg" alt="si" />
        ) : null;
      })}

      {hotelData.map((hotel) => {
        return (
          <>
            <div className="SiDesc">
              <h1 className="siTitle">{hotel.hotel_name}</h1>
              <span className="siDistnce">500m from center</span>
              <span className="siTaxi">Free Airport Taxi</span>
              <span className="siSubtitle">
                Studio Appartment with Air Comditioning
              </span>
              <span className="sFeature">{hotel.room_type}</span>
              <span className="siCancel">Free Cancelation</span>
              <span className="sCancelOpSub"></span>
            </div>
            <div className="siDetail">
              <div className="siRating">
                <span>Excellent</span>
                <button>{hotel.rating}</button>
              </div>
              <div className="detailText">
                <span className="siPrice">₹{" "}{hotel.price_per_night}</span>
                <span className="siTaxOp">Includes Taxes and fees</span>
                <button className="siCbutton" onClick={()=>navigate("/payment")}>Book now</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SearchItem;
