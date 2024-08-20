import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import conversation from '../images/conversation.png';
import match from '../images/match.png';
import happyClients from '../images/happyClients.png';
import subscribe from '../images/subscribe.png';



function WelcomePage_TipsSection(){
    return(
        <>
        

      <div className="container my-5">
        <h2 className="text-center mb-4">Here are some tips for a better experience</h2>
        <div className="d-flex flex-nowrap justify-content-center gap-4 overflow-auto">
          <div className="text-center">
            <img src={conversation} alt="Tip Image 1" className="img-fluid tip-image" style={{ maxHeight: '22vh', width: 'auto', objectFit: 'cover' }} />
            <a href="#" className="d-block mt-3 fs-5" style={{ color: 'black', textDecoration: 'none' }}>
              How to start a conversation with someone?
            </a>
          </div>

          <div className="text-center">
            <img src={match} alt="Tip Image 2" className="img-fluid tip-image" style={{ maxHeight: '22vh', width: 'auto', objectFit: 'cover' }} />
            <a href="#" className="d-block mt-3 fs-5" style={{ color: 'black', textDecoration: 'none' }}>
              How to get better matches?
            </a>
          </div>

          <div className="text-center">
            <img src={happyClients} alt="Tip Image 3" className="img-fluid tip-image" style={{ maxHeight: '22vh', width: 'auto', objectFit: 'cover' }} />
            <a href="#" className="d-block mt-3 fs-5" style={{ color: 'black', textDecoration: 'none' }}>
              Discover the stories behind our happy couples
            </a>
          </div>

          <div className="text-center">
            <img src={subscribe} alt="Tip Image 4" className="img-fluid tip-image" style={{ maxHeight: '22vh', width: 'auto', objectFit: 'cover' }} />
            <a href="#" className="d-block mt-3 fs-5" style={{ color: 'black', textDecoration: 'none' }}>
              Explore our subscription plans
            </a>
          </div>
        </div>
      </div>

      <style>{`
        a:hover {
          color: blue !important;
        }
        .tip-image:hover {
          transform: scale(1.05);
        }
        .btn-charcoal {
          background-color: #36454F; /* Charcoal color */
          color: white;
          border: none; /* Remove border for a cleaner look */
        }
        .btn-charcoal:hover,
        .btn-charcoal:focus,
        .btn-charcoal:active {
          background-color: #2C3E50; /* Darker charcoal on hover and active */
          color: white;
          box-shadow: none; /* Remove shadow on hover and focus */
        }
      `}</style>
        </>

    )
}

export default WelcomePage_TipsSection;