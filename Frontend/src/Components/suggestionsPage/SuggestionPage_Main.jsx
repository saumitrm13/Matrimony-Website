import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SuggestionPage_Navbar from "./SuggestionsPage_Navbar";
import SuggestionPage_Filters from "./SuggestionsPage_Filters";
import SuggestionPage_Cards from "./SuggestionPage_Cards";
import SuggestionPage_Footer from "./SuggestionsPage_Footer";
import axios from "axios";

function SuggestionPage_Main() {
    const [filterResults, setFilterResults] = useState(null);
    const [suggestionResults, setSuggestionResults] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    console.log("id-------------------------")
    console.log(sessionStorage.getItem('userId'))
    const handleFilterResults = (data) => {
        setFilterResults(data);
    };

    const handleSuggestionResults = (suggestionsData) => {
        setSuggestionResults(suggestionsData);
    };

    const handleSearchResults = (searchData) => {
        setSearchResults(searchData);
    }
    const loadSuggestions = async () => {
        const requestBody = {
            id: sessionStorage.getItem('userId'),
        };

        try {
            const response = await axios.post("http://localhost:8080/getSuggestions", requestBody, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log("Suggestions Fetched successfully:", response.data.suggestionCardsByAge);
            handleSuggestionResults(response.data);
        } catch (error) {
            console.error("Error in getting suggestions:", error);
        }
    };

    // Load suggestions when the component mounts
    React.useEffect(() => {
        loadSuggestions();
    }, []);

    return (
        <>
            <div className="container-fluid p-0">
                <SuggestionPage_Navbar onApplySearch={handleSearchResults}/>
                <div className="row m-0">
                    <SuggestionPage_Filters onApplyFilters={handleFilterResults} onApplySearch={handleSearchResults}/>
                    <SuggestionPage_Cards data={filterResults} suggestions={suggestionResults} searchCards={searchResults}/>
                </div>
                <SuggestionPage_Footer />
            </div>
        </>
    );
}

export default SuggestionPage_Main;
