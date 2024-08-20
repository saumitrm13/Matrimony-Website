import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const InterestLists = () => {
  const [interestedIn, setInterestedIn] = useState([]);
  const { userId } = useParams(); 
  const [shownBy, setShownBy] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getInterestedInNames/${userId}`);
        const [interestedInNames, shownByNames] = response.data;
        setInterestedIn(interestedInNames);
        setShownBy(shownByNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <p className="text-center">Loading...</p>;

  const handleViewProfile = (id) => {
    navigate('/profile',{ state: { userId: id, isMyProfile: false } }); 
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Interest Lists</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">People Interested in {userId}</h4>
            </div>
            <ul className="list-group list-group-flush">
              {interestedIn.length ? (
                interestedIn.map(user => (
                  <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{user.fullName}</strong> - {user.age} years old
                    </div>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleViewProfile(user.id)}
                    >
                      View Profile
                    </button>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No users found.</li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">People Who Showed Interest in {userId}</h4>
            </div>
            <ul className="list-group list-group-flush">
              {shownBy.length ? (
                shownBy.map(user => (
                  <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{user.fullName}</strong> - {user.age} years old
                    </div>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleViewProfile(user.id)}
                    >
                      View Profile
                    </button>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No users found.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestLists;
