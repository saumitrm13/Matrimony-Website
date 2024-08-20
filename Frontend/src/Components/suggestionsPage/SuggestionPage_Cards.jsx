import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import logo from '../images/logo.png';
import { useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import { Toast } from "react-bootstrap";

function SuggestionPage_Cards({ data, suggestions, searchCards, onApplySearch }) {
    console.log("Suggestions:", suggestions);
    console.log("Data:", data);
    console.log("search :",searchCards );
    
    const navigate = useNavigate();

    const toProfilePage = (userId) => {
        navigate('/profile', { state: { userId, isMyProfile: false } });
    };

    const showInterest = async (userId, userName) => {
        try{
            const response = await axios.post(`http://localhost:8080/showInterest/${sessionStorage.getItem('userId')}/${userId}`);
            alert("Interest shown in ", userName);
        }catch(error){
            console.log("erro : ", error);
            alert("Couldn't show interest");
        }

    }
    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const renderCards = (profiles) => {
        console.log("length :", profiles.length);
        if (profiles && profiles.length > 0) {
            
            return profiles.map((profile, index) => (
                <div key={index} className="p-2 mb-4">
                    <div className="card" style={{ width: '16rem', height: '22rem' }}>
                        <img src={logo} className="card-img-top" alt="Profile" />
                        <div className="card-body">
                            <h5 className="card-title">Name: {profile.fullName}</h5>
                            <p className="card-text">Age: {profile.age}</p>
                            <button className="btn btn-primary" style={{ width: '8rem' }} onClick={() => toProfilePage(profile.id)}>View Profile</button>
                            <button className="btn btn-secondary ms-2" style={{ width: '5rem' }} onClick={() => showInterest(profile.id,profile.fullName)}>
                                <span role="img" aria-label="heart">❤️</span>
                            </button>
                        </div>
                    </div>
                </div>
            ));
        } else {
            return (
                <div className="p-2 mb-4">
                    <div className="card" style={{ width: '16rem', height: '22rem' }}>
                        <img src={logo} className="card-img-top" alt="Profile" />
                        <div className="card-body">
                            <h5 className="card-title">Name: N/A</h5>
                            <p className="card-text">Age: N/A</p>
                            <button className="btn btn-primary" style={{ width: '8rem' }} onClick={() => toProfilePage(null)}>View Profile</button>
                            <button className="btn btn-secondary ms-2" style={{ width: '5rem' }}>
                                <span role="img" aria-label="heart">❤️</span>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const getCardsToRender = () => {
        if (searchCards && searchCards.length > 0){
            return (
                <div className="mb-5">
                    <h4 className="mb-4">Filtered Results</h4>
                    <Slider {...settings}>
                        {renderCards(searchCards)}
                    </Slider>
                </div>
            );
        }
        else if (data && data.length > 0) {
            return (
                <div className="mb-5">
                    <h4 className="mb-4">Filtered Results</h4>
                    <Slider {...settings}>
                        {renderCards(data)}
                    </Slider>
                </div>
            );
        } else {
            return (
                <>
                    {suggestions?.suggestionCardsByAge && suggestions.suggestionCardsByAge.length > 0 && (
                        <div className="mb-5">
                            <h4 className="mb-4">Matches By Age</h4>
                            <Slider {...settings}>
                                {renderCards(suggestions.suggestionCardsByAge)}
                            </Slider>
                        </div>
                    )}
                    {suggestions?.suggestionCardsByEducation && suggestions.suggestionCardsByEducation.length > 0 && (
                        <div className="mb-5">
                            <h4 className="mb-4">Matches By Education</h4>
                            <Slider {...settings}>
                                {renderCards(suggestions.suggestionCardsByEducation)}
                            </Slider>
                        </div>
                    )}
                    {suggestions?.suggestionCardsByReligion && suggestions.suggestionCardsByReligion.length > 0 && (
                        <div className="mb-5">
                            <h4 className="mb-4">Matches By Religion</h4>
                            <Slider {...settings}>
                                {renderCards(suggestions.suggestionCardsByReligion)}
                            </Slider>
                        </div>
                    )}
                </>
            );
        }
    };

    return (
        <div className="col-md-10 p-4 mb-5">
            {getCardsToRender()}
        </div>
    );
}

export default SuggestionPage_Cards;
