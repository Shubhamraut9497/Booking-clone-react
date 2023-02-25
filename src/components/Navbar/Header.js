import React from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//  import Button from 'react-bootstrap/Button';
 import { Avatar } from '@mui/material';
 import { useNavigate } from 'react-router-dom';

const Header=()=>{
  const navigate=useNavigate();
  return (
    <div className="header">
        <div className="header__left">
            <h1>Booking.com</h1>
        </div>
        <div className="header__right">
            <div><Avatar></Avatar></div>
            <button type="submit" className="bt" onClick={()=>navigate("/register")}>Register</button>
            <button type="submit" className="bt"onClick={()=>navigate("/login")}>Login</button>
        </div>
    </div>
  )
}

export default Header