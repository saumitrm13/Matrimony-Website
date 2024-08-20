import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import { useLocation } from 'react-router-dom';
import { Form } from 'react-router-dom';
import InterestLists from '../InterestsListFolder/InterestsList';

// Mock API endpoint
 // Replace with your API endpoint

const ProfilePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userId, isMyProfile } = location.state;
  const [userData, setUserData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [formValues, setFormValues] = useState({});

  const [interestDetails, setInterestDetails] = useState([]);
  
  const toInterestList = () =>{
    navigate(`/interestsList/${userId}`); 
  }
  useEffect(() => {
    const fetchUserData = async () => {
        try {
            // Retrieve userId from session storage
            const id = userId;
            // Ensure userId exists
            if (!id) {
              console.error('No user ID found in session storage.');
              return;
            }
    
            // Construct the API endpoint URL with userId
            
            // Fetch user data
            const response = await axios.get(`http://localhost:8080/user/${id}`);
            setUserData(response.data);
            console.log(userData);
            const interestsResponse = await axios.get(`http://localhost:8080/getInterestsList/${id}`);
            setInterestDetails(interestsResponse.data)
            console.log(interestDetails);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
    };

    fetchUserData();
  }, []);

  const handleEdit = (section) => {
    setCurrentSection(section);
    setShowEditModal(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.includes('.')) {
        const [parent, key] = name.split('.');
        setFormValues((prev) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [key]: value,
          },
        }));
      } else {
        setFormValues((prev) => ({
          ...prev,
          [name]: value,
        }));
      }


  };
  const [pd, setPd] = useState({
    motherTongue: { motherTongue: ''},
    height: 0,
    weight: 0,
    nationality: { nationality: '' },
    maritalStatus: { maritalstatus: '' },
  })

  const handlePDChange = (event) => {
    const { name, value } = event.target;

    if (name.includes('.')) {
        const [parent, key] = name.split('.');
        setPd((prev) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [key]: value,
          },
        }));
      } else {
        setPd((prev) => ({
          ...prev,
          [name]: value,
        }));
      }


  };

  const closeEditModal = () => setShowEditModal(false);

  if (!userData) {
    return <p>Loading...</p>;
  }

//   const handleSaveChanges = (event) => {
//     event.preventDefault();
//     // Update userData with the new values (e.g., from form inputs)
//     // You can add form validation and other logic here
//     const updatedData = {
//         ...userData,
//         fullName: event.target.fullName.value,
//         email: event.target.email.value,
//         // Add other updated fields here
//     };
//     setUserData(updatedData);
//     setShowEditModal(false);
// };

const handleSaveChanges =async () => {
    try {
        // Retrieve userId from session storage
        const id = userId;
        // Ensure userId exists
        if (!id) {
          console.error('No user ID found in session storage.');
          return;
        }

        // Construct the API endpoint URL with userId
        
        // Fetch user data
        if(currentSection=='basicDetails'){
        const response = await axios.put(`http://localhost:8080/user/updateBasicDetails/${id}`, formValues);
        }
        if(currentSection=='personalDetails'){
            console.log(pd);
        }
      } catch (error) {
        console.error('Error updating Basic user data:', error);
      }

    //const response = await axios.put(`http://localhost:8080/user/updateBasicDetails/{id}`, formValues);
    closeEditModal();
  };

  return (
    <Container fluid>
      {/* Profile Header */}
      <Row className="text-center my-4">
        <Col>
          <Card style={{ width: '20rem', margin: '0 auto', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Profile" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <Card.Body>
              <Card.Title>{userData.fullName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{userData.email}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>

     {/* Interest Details Section */}
            <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-primary text-white">Connections Details</Card.Header>
            <ListGroup variant="flush">
              <center><ListGroup.Item><strong>This profile has shown interest in {interestDetails[0]} People </strong></ListGroup.Item></center>
              <center><ListGroup.Item><strong>{interestDetails[1]} other profiles are interested in this profile</strong></ListGroup.Item></center>
            </ListGroup>
            <Card.Body>
            {!isMyProfile && (
                           
                                <Button variant="primary" onClick={() => toInterestList()}>
                                    View List
                                </Button>
                         
                        )}
            </Card.Body>
          </Card>
        </Col>
      </Row>


      {/* Basic Details Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-primary text-white">Basic Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Full Name:</strong> {userData.fullName}</ListGroup.Item>
              <ListGroup.Item><strong>Email:</strong> {userData.email}</ListGroup.Item>
              <ListGroup.Item><strong>Date of Birth:</strong> {userData.dob}</ListGroup.Item>
              <ListGroup.Item><strong>Gender:</strong> {userData.gender ? 'Male' : 'Female'}</ListGroup.Item>
              <ListGroup.Item><strong>Age:</strong> {userData.age}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                                <Button variant="primary" onClick={() => handleEdit('basicDetails')}>
                                    Edit
                                </Button>
                         
                        )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Personal Details Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-secondary text-white">Personal Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Height:</strong> {userData.height} cm</ListGroup.Item>
              <ListGroup.Item><strong>Weight:</strong> {userData.weight} kg</ListGroup.Item>
              <ListGroup.Item><strong>Nationality:</strong> {userData.nationality.nationality}</ListGroup.Item>
              <ListGroup.Item><strong>Marital Status:</strong> {userData.maritalStatus.maritalstatus}</ListGroup.Item>
              <ListGroup.Item><strong>Mother Tongue:</strong> {userData.motherTongue.motherTongue}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                                <Button variant="primary" onClick={() => handleEdit('personalDetails')}>
                                    Edit
                                </Button>
                        )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Lifestyle Information Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-success text-white">Lifestyle Information</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Vegetarian:</strong> {userData.vegeterain ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item><strong>Drinker:</strong> {userData.drinker ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item><strong>Smoker:</strong> {userData.smoker ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item><strong>Disabled:</strong> {userData.disabled ? 'Yes' : 'No'}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                           <Button variant="primary" onClick={() => handleEdit('lifestyleInformation')}>
                               Edit
                           </Button>
                    
                   )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Religion Info Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-danger text-white">Religion Info</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Religion:</strong> {userData.religion.religion}</ListGroup.Item>
              <ListGroup.Item><strong>Caste:</strong> {userData.caste.caste}</ListGroup.Item>
              <ListGroup.Item><strong>Zodiac Sign:</strong> {userData.zodiacSign.zoidac_sign}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                           <Button variant="primary" onClick={() => handleEdit('religionInformation')}>
                               Edit
                           </Button>
                    
                   )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Family Info Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-info text-white">Family Info</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Father's Name:</strong> {userData.fatherName}</ListGroup.Item>
              <ListGroup.Item><strong>Mother's Name:</strong> {userData.motherrName}</ListGroup.Item>
              <ListGroup.Item><strong>Total Siblings:</strong> {userData.totalSiblings}</ListGroup.Item>
              <ListGroup.Item><strong>Family Income:</strong> {userData.familyIncome}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                           <Button variant="primary" onClick={() => handleEdit('familyInformation')}>
                               Edit
                           </Button>
                    
                   )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Professional Info Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-warning text-dark">Professional Info</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Education:</strong> {userData.education.degree}</ListGroup.Item>
              <ListGroup.Item><strong>University Name:</strong> {userData.universityName}</ListGroup.Item>
              <ListGroup.Item><strong>Company Name:</strong> {userData.companyName}</ListGroup.Item>
              <ListGroup.Item><strong>Annual Income:</strong> {userData.annualIncome}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                           <Button variant="primary" onClick={() => handleEdit('professionalInformation')}>
                               Edit
                           </Button>
                    
                   )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

            {/* Astrological Info Section */}
            <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-dark text-white">Astrological Info</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Time of Birth:</strong> {userData.time}</ListGroup.Item>
              <ListGroup.Item><strong>Place of Birth:</strong> {userData.placeOfBirth}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                           <Button variant="primary" onClick={() => handleEdit('astrologicalInformation')}>
                               Edit
                           </Button>
                    
                   )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Partner Preference Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-pink text-white">Partner Preference</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Preferred Marital Status:</strong> {userData.pref_maritalStatus.maritalstatus}</ListGroup.Item>
              <ListGroup.Item><strong>Preferred Age Range:</strong> {userData.minAge} - {userData.maxAge}</ListGroup.Item>
              <ListGroup.Item><strong>Preferred Education Degree:</strong> {userData.preferredEducation.degree}</ListGroup.Item>
              <ListGroup.Item><strong>Preferred City:</strong> {userData.preferredCity.city}</ListGroup.Item>
              <ListGroup.Item><strong>Preferred Religion:</strong> {userData.preferredReligion.religion}</ListGroup.Item>
              <ListGroup.Item><strong>Preferred Income:</strong> {userData.preferredIncome}</ListGroup.Item>
              <ListGroup.Item><strong>Vegetarian Preferred:</strong> {userData.vegeterainPreffered ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item><strong>Smoker Preferred:</strong> {userData.smokingPreffered ? 'Yes' : 'No'}</ListGroup.Item>
              <ListGroup.Item><strong>Drinking Preferred:</strong> {userData.drinkingPreffered ? 'Yes' : 'No'}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                           <Button variant="primary" onClick={() => handleEdit('partnerPreference')}>
                               Edit
                           </Button>
                    
                   )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Residential Details Section */}
      <Row className="my-4">
        <Col>
          <Card style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="bg-info text-white">Residential Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>City:</strong> {userData.city.city}</ListGroup.Item>
              <ListGroup.Item><strong>Pincode:</strong> {userData.pincode}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            {isMyProfile && (
                           
                           <Button variant="primary" onClick={() => handleEdit('Residential Deatils')}>
                               Edit
                           </Button>
                    
                   )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {currentSection}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentSection === 'basicDetails' && (
            <>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  value={formValues.fullName || userData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Dob</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="form-control"
                  value={formValues.dob || userData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    className="form-control"
                    value={formValues.gender || true}
                    onChange={handleChange}
                >
                    <option value={false}>Male</option>
                    <option value={true}>Female</option>
                </select>
              </div>

              
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="form-control"
                  value={formValues.age || userData.age}
                  onChange={handleChange}
                />
              </div>
              {/* Add other fields as needed */}
            </>

          )}
          

          {/* Add similar conditional rendering for other sections */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>Close</Button>
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfilePage;
