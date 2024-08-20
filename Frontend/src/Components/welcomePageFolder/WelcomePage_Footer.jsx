import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomePageFooter() {
    return(
        <>
        <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md">
              <a href="/aboutus" className="text-light text-decoration-none fs-5">
                About Us
              </a>
            </div>
            <div className="col-md">
              <a href="/contactus" className="text-light text-decoration-none fs-5">
                Contact
              </a>
            </div>
            <div className="col-md">
              <a href="/privacyPolicy" className="text-light text-decoration-none fs-5">
                Privacy Policy
              </a>
            </div>
            <div className="col-md">
              <a href="#" className="text-light text-decoration-none fs-5">
                Terms of Service
              </a>
            </div>
            <div className="col-md">
              <a href="#" className="text-light text-decoration-none fs-5">
                Help
              </a>
            </div>
          </div>
        </div>
      </footer>

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

export default WelcomePageFooter;