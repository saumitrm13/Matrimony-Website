import React from 'react';

const ProfessionalInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Handle nested object updates
    if (name === 'education') {
      setFormData((prevData) => ({
        ...prevData,
        education: {
          ...prevData.education,
          degree: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  

  return (
    <div className="container col-md-12 col-sm-6">
      <h2>Professional Information</h2>
      <p>Please Enter your Professional Information</p>
      <form>
        <div className="mb-3 row">
          <label htmlFor="education" className="form-label" style={{ fontSize: 'large' }}>
            Highest Qualification
          </label>
          <div className="col-md-10">
            <select
              name="education"
              id="education"
              className="form-control"
              value={formData.education.degree}
              onChange={handleChange}
            >
              <option value="">Select Qualification</option>
  <option value="B.Sc">B.Sc</option>
  <option value="M.Sc">M.Sc</option>
  <option value="B.E">B.E</option>
  <option value="B.Tech">B.Tech</option>
  <option value="Ph.D">Ph.D</option>
  <option value="M.E">M.E</option>
  <option value="M.Tech">M.Tech</option>
  <option value="B.Com">B.Com</option>
  <option value="MBBS">MBBS</option>
  <option value="BAMS">BAMS</option>
  <option value="BHMS">BHMS</option>
  <option value="M.D">M.D</option>
  <option value="M.Com">M.Com</option>
  <option value="MBA">MBA</option>
  <option value="BBA">BBA</option>
  <option value="Diploma">Diploma</option>
  <option value="B.A">B.A</option>
  <option value="M.A">M.A</option>
  <option value="10th">10th</option>
  <option value="12th">12th</option>
  <option value="Other">Other</option>
              {/* Add more qualification options as needed */}
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="universityName" className="form-label" style={{ fontSize: 'large' }}>
            University Name
          </label>
          <div className="col-md-10">
            <input
              name="universityName"
              id="universityName"
              className="form-control"
              value={formData.universityName}
              onChange={handleChange}
              placeholder="Enter your university name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="companyName" className="form-label" style={{ fontSize: 'large' }}>
            Company/Business Name
          </label>
          <div className="col-md-10">
            <input
              name="companyName"
              id="companyName"
              className="form-control"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter your company or business name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="annualIncome" className="form-label" style={{ fontSize: 'large' }}>
            Annual Income
          </label>
          <div className="col-md-10">
            <input
              type="number"
              name="annualIncome"
              id="annualIncome"
              className="form-control"
              value={formData.annualIncome}
              onChange={handleChange}
              placeholder="Enter your annual income"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalInfo;
