import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function SuggestionPage_Footer(){
    return(
        <>
            {/* Footer Section */}
            <footer className="bg-dark text-white py-4">
                    <div className="container text-center">
                        <div className="footer-section">
                            <h5><a href="#" className="text-white text-decoration-none">About us</a></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="footer-section">
                            <h5><a href="#" className="text-white text-decoration-none">Feedback</a></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="footer-section">
                            <h5><a href="#" className="text-white text-decoration-none">Help</a></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </footer>
            

            <style>{`
                .navbar-brand img {
                    width: 20vw;
                    height: auto;
                }
                .card-img-top {
                    height: 28vh;
                    object-fit: cover;
                }
                .btn-primary, .btn-secondary {
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .btn-primary:hover, .btn-primary:focus, .btn-primary:active {
                    background-color: #0056b3;
                }
                .btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {
                    background-color: #5a5a5a;
                }
                footer h5 {
                    margin-bottom: 0.5rem;
                }
                footer p {
                    margin-top: 0;
                    font-size: 0.9rem;
                }
                .footer-section {
                    margin-bottom: 2rem;
                }
                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
                }
                .card{
                    transition: 0.4s
                }
            `}</style>
        </>
    )
}

export default SuggestionPage_Footer;