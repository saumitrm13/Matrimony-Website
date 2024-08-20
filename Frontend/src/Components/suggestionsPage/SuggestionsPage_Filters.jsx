import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function SuggestionPage_Filters({ onApplyFilters, onApplySearch}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [maxAge, setMaxAge] = useState('');
  const [minAge, setMinAge] = useState('');
  const [height, setHeight] = useState('');
  const [nonDrinker, setNonDrinker] = useState(false);
  const [nonSmoker, setNonSmoker] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [otherReligions, setOtherReligions] = useState(false);
  const [otherCastes, setOtherCastes] = useState(false);

  const options = [
    "B.Sc",
    "M.Sc",
    "B.E",
    "B.Tech",
    "Ph.D",
    "M.E",
    "M.Tech",
    "B.Com",
    "MBBS",
    "BAMS",
    "BHMS",
    "M.D",
    "M.Com",
    "MBA",
    "BBA",
    "Diploma",
    "B.A",
    "M.A",
    "10th",
    "12th"
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsFocused(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const requestBody = {
      id: sessionStorage.getItem('userId'),
      maxAge: parseInt(maxAge),
      minAge: parseInt(minAge),
      height: parseInt(height),
      education: selectedOption,
      nonDrinker: nonDrinker,
      nonSmoker: nonSmoker,
      vegetarian: vegetarian,
      otherReligions: otherReligions,
      otherCastes: otherCastes
    };

    try {
      const response = await axios.post("http://localhost:8080/filter", requestBody, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Filters applied successfully:", response.data);
      onApplyFilters(response.data); 
      onApplySearch(null);  

      
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };


  return (
    <>
      <div className="col-md-2 p-4" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
        <h3 className="text-center">Filters</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h5>Basic Details</h5>
            <input type="number" className="form-control mb-3 ml-6" placeholder="Maximum Age" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} />
            <input type="number" className="form-control mb-3 ml-6" placeholder="Minimum Age" value={minAge} onChange={(e) => setMinAge(e.target.value)} />
            <input type="number" className="form-control mb-3" placeholder="Minimum Height in cms" value={height} onChange={(e) => setHeight(e.target.value)} />
            <input
              type="text"
              className="form-control"
              id="selectedOption"
              value={selectedOption}
              readOnly
              onMouseEnter={() => setIsFocused(true)}
              onMouseLeave={() => setIsFocused(false)}
              placeholder="Education"
            />
            {isFocused && (
              <ul
                className="list-group"
                onMouseEnter={() => setIsFocused(true)}
                onMouseLeave={() => setIsFocused(false)}
              >
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option === '' ? 'Clear Selection' : option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-4">
            <h5>Lifestyle</h5>
            <input type="checkbox" id="nonDrinkCheck" className="form-check-input" style={{ margin: '0.3rem' }} checked={nonDrinker} onChange={(e) => setNonDrinker(e.target.checked)} />
            <label className="form-check-label" htmlFor="nonDrinkCheck" style={{ margin: '0.3rem' }}>
              Non Drinker
            </label>
            <br />
            <input type="checkbox" id="nonSmokeCheck" className="form-check-input" style={{ margin: '0.3rem' }} checked={nonSmoker} onChange={(e) => setNonSmoker(e.target.checked)} />
            <label className="form-check-label" htmlFor="nonSmokeCheck" style={{ margin: '0.3rem' }}>
              Non Smoker
            </label>
            <br />
            <input type="checkbox" id="vegetarianCheck" className="form-check-input" style={{ margin: '0.3rem' }} checked={vegetarian} onChange={(e) => setVegetarian(e.target.checked)} />
            <label className="form-check-label" htmlFor="vegetarianCheck" style={{ margin: '0.3rem' }}>
              Vegetarian
            </label>
          </div>

          <div className="mb-4">
            <h5>Religion</h5>
            <input type="checkbox" id="otherReligionCheck" className="form-check-input" style={{ margin: '0.3rem' }} checked={otherReligions} onChange={(e) => setOtherReligions(e.target.checked)} />
            <label className="form-check-label" htmlFor="otherReligionCheck" style={{ margin: '0.3rem' }}>
              Also suggest from other religions
            </label>
            <br />
            <input type="checkbox" id="otherCasteCheck" className="form-check-input" style={{ margin: '0.3rem' }} checked={otherCastes} onChange={(e) => setOtherCastes(e.target.checked)} />
            <label className="form-check-label" htmlFor="otherCasteCheck" style={{ margin: '0.3rem' }}>
              Also suggest from other castes
            </label>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '14vw' }}>Apply Filters</button>
        </form>
      </div>
    </>
  );
}

export default SuggestionPage_Filters;
