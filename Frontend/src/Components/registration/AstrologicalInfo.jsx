import React from 'react';

const AstrologicalInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,  // Spread the previous state to keep existing data
      [name]: value  // Update only the field that changed
    }));
  };

  return (
    <div className="container col-md-12 col-sm-6">
      <h2>Astrological Information</h2>
      <p>Please Enter your Astrological Information</p>
      <form>
        <div className="mb-3 row">
          <label htmlFor="dob" className="form-label" style={{ fontSize: 'large' }}>Date of Birth</label>
          <div className="col-md-10">
            <input
              type="date"
              name="dob"
              id="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="time" className="form-label" style={{ fontSize: 'large' }}>Time of Birth</label>
          <div className="col-md-10">
            <input
              type="time"
              name="time"
              id="time"
              className="form-control"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="placeOfBirth" className="form-label" style={{ fontSize: 'large' }}>Place of Birth</label>
          <div className="col-md-10">
            <input
              type="text"
              name="placeOfBirth"
              id="placeOfBirth"
              className="form-control"
              value={formData.placeOfBirth}
              onChange={handleChange}
              placeholder="Enter your place of birth"
            />
          </div>
        </div>

        
      </form>
    </div>
  );
};

export default AstrologicalInfo;
