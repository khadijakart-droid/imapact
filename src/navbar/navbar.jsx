import React from "react";
import image from '.././assets/logo.jpg'
import './navbar.css'
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="navbar">
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <div className="logo">
                <img src={image} alt="" />
            </div>
          </div>
          <div className="col-6">
            <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Portfolio</a></li>
        </ul>

          </div>
          <div className="col-3">
            <div className="contact">
                 <a href="#" class="contact-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        
        </>

)

}
export default Navbar