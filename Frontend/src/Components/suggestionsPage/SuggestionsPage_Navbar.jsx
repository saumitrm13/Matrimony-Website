import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SuggestionPage_Navbar( { onApplySearch } ) {
    const [searchString, setSearchString] = useState('');
    const navigate = useNavigate();

    const onSearch = async () => {
        const requestBody = {
            id: sessionStorage.getItem('userId'),
            searchString: searchString
        };
        console.log(requestBody);
        try {
            const response = await axios.post("http://localhost:8080/search", requestBody, {
              headers: {
                "Content-Type": "application/json"
              }
            });

            onApplySearch(response.data);
    }catch(error){
        console.log("error :", error);
    };}

    const toProfilePage = (userId) => {
        navigate('/profile', { state: { userId, isMyProfile: true } });
    };

    const logout = () => {
        navigate("/logout");
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#36454F', color: 'white' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" style={{ width: '13vw', height: '13vh', objectFit: 'contain' }} />
                    </a>
                    <div className="d-flex justify-content-center align-items-center flex-grow-1">
                        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search profiles"
                                aria-label="Search"
                                value={searchString}
                                onChange={(e) => setSearchString(e.target.value)}
                            />
                            <button className="btn btn-primary" type="button" onClick={onSearch}>Search</button>
                        </form>
                    </div>
                    <div className="d-flex align-items-center ms-auto">
                        <button className="btn btn-light me-2" onClick={() => toProfilePage(sessionStorage.getItem('userId'))}>My Profile</button>
                        <button className="btn btn-light" onClick={logout}>Log Out</button>
                    </div>
                </div>
            </nav>

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
                .card {
                    transition: 0.4s;
                }
            `}</style>
        </>
    );
}

export default SuggestionPage_Navbar;
