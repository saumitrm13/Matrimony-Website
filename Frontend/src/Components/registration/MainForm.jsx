import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicDetails from './BasicDetails';
import PersonalDetails from './PersonalDetails';
import LifestyleDetails from './LifeStyleInformation';
import ReligionInfo from './ReligionInfo';
import FamilyInfo from './FamilyInfo';
import ProfessionalInfo from './ProfessionalDetails';
import AstrologicalInfo from './AstrologicalInfo';
import PartnerPreference from './PartnerPreference';
import ResidentialDetails from './ResidentialDetails';

const MainForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    createdOn: '',
    updatedOn: '',
    fullName: '',
    email: '',
    dob: '',
    gender: false,
    password: '',
    age: 0,
    motherTongue: { motherTongue: '' },
    height: 0,
    weight: 0,
    nationality: { nationality: '' },
    maritalStatus: { maritalstatus: '' },
    religion: { religion: '' },
    caste: { caste: '' },
    zodiacSign: { zodiacSign: '' },
    fatherName: '',
    motherrName: '',
    totalSiblings: 0,
    familyIncome: 0,
    city: { city: '' },
    pincode: 0,
    education: { degree: '' },
    universityName: '',
    companyName: '',
    annualIncome: 0,

    time: '',
    placeOfBirth: '',

    pref_maritalStatus: { maritalstatus: '' },
    minAge: 0,
    maxAge: 0,
    preferredEducation: { degree: '' },
    preferredCity: { city: '' },
    preferredReligion: { religion: '' },
    preferredIncome: 0,
    smokingPreffered: false,
    vegeterain: false,
    drinker: false,
    smoker: false,
    disabled: false,
    vegeterainPreffered: false,
    drinkingPreffered: false,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const steps = [
    'Basic Details',
    'Personal Details',
    'Lifestyle Information',
    'Religion Info',
    'Family Info',
    'Professional Info',
    'Astrological Info',
    'Partner Preference',
    'Residential Details'
  ];

  useEffect(() => {
    console.log('Current Form Data:', formData);
  }, [formData]);

  const nextStep = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        // Make API call here
        const response = await axios.post('http://localhost:8080/registerUser', formData);
        console.log('Response:', response.data);
        // Show the success modal if the request is successful
        setShowModal(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally handle error
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <BasicDetails formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 1:
        return <PersonalDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <LifestyleDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <ReligionInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <FamilyInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <ProfessionalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <AstrologicalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 7:
        return <PartnerPreference formData={formData} setFormData={setFormData} prevStep={prevStep} />;
      case 8:
        return <ResidentialDetails formData={formData} setFormData={setFormData} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="container">
      {/* Progress Bar */}
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {`${Math.round(progressPercentage)}%`}
        </div>
      </div>

      {/* Step Content */}
      <div className="mt-4">
        {renderForm()}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4">
        <button className="btn btn-secondary me-2" onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={nextStep}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>

      {/* Success Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Registration Successful</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <p>Your registration has been successfully completed!</p>
              <p>Please <a href="/login">log in</a> to access your account.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
