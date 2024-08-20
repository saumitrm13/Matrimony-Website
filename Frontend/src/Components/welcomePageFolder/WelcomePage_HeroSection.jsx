import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import logo2 from '../images/logo2.png';


function WelcomePage_HeroSection(){
  const navigate = useNavigate();

  const toLogin = () =>{
      navigate("/login")
  }

  const toRegister = () =>{
    navigate("/register")
}
    return(
        <>
         <div id="HeroSection" className="position-relative text-center" style={{ maxHeight: '70vh' }}>
        <img src={logo2} alt="Hero Image" className="img-fluid w-100" style={{ maxHeight: '70vh', objectFit: 'cover', opacity: '0.75' }} />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="display-3 fw-bold text-dark">Welcome to Humsafar</h1>
          <p className="fs-4 text-dark">"Your happily ever after starts here!"</p>
          <a href='/learnMore'><button className="btn btn-primary btn-lg">Learn More</button></a>
        </div>
        <div className="position-absolute top-0 end-0 mt-3 me-3 d-flex flex-column">
          <button className="btn btn-charcoal mb-2" onClick={toRegister}>
            Sign Up
          </button>
          <button className="btn btn-charcoal" onClick={toLogin}>
            Log In
          </button>
        </div>
      </div>
        </>
    )
}
export default WelcomePage_HeroSection;