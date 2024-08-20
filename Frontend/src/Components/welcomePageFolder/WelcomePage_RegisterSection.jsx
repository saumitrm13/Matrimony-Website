import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';




function WelcomePage_RegisterSection(){
   const navigate = useNavigate();

   const handleClick = () => {
      navigate("/register");
   }
    return(
        <>
        <div className="container mt-5">
        <div className="text-light p-5 rounded text-center" style={{ backgroundColor: '#333333' }}>
          <p className="fs-3">Let's get to know you better!</p>
          <p className="fs-5">Tell us more about yourself by registering, and we will find better matches for you.</p>
          <button className="btn btn-secondary btn-lg" onClick={handleClick}>Register Here</button>
        </div>
      </div>

        </>
    )
}

export default WelcomePage_RegisterSection;