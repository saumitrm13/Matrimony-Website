import React from 'react';

const FamilyInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,  // Spread the previous state to keep existing data
      [name]: value  // Update only the field that changed
    }));
  };

  return (
    <div className="container col-md-12 col-sm-6">
      <h2>Family Information</h2>
      <p>Please Enter your Family Information</p>
      <form>
        <div className="mb-3 row">
          <label htmlFor="fatherName" className="form-label" style={{ fontSize: 'large' }}>Father's Name</label>
          <div className="col-md-10">
            <input
              name="fatherName"
              id="fatherName"
              className="form-control"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter your father's name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="motherName" className="form-label" style={{ fontSize: 'large' }}>Mother's Name</label>
          <div className="col-md-10">
            <input
              name="motherName"
              id="motherName"
              className="form-control"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Enter your mother's name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="totalSiblings" className="form-label" style={{ fontSize: 'large' }}>Number of Siblings</label>
          <div className="col-md-10">
            <input
              type="number"
              name="totalSiblings"
              id="totalSiblings"
              className="form-control"
              value={formData.totalSiblings}
              onChange={handleChange}
              placeholder="Enter the number of siblings"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="familyIncome" className="form-label" style={{ fontSize: 'large' }}>Family Income</label>
          <div className="col-md-10">
            <input
              type="number"
              name="familyIncome"
              id="familyIncome"
              className="form-control"
              value={formData.familyIncome}
              onChange={handleChange}
              placeholder="Enter the annual family income"
            />
          </div>
        </div>

        
      </form>
    </div>
  );
};

export default FamilyInfo;
