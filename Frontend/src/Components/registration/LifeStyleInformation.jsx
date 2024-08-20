import React from 'react';

const LifeStyleInformation = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name,type, value,checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,  // Spread the previous state to keep existing data
      [name]: type === 'checkbox' ? checked : value  // Update only the field that changed
    }));
  };

  return (
    <div className="container col-md-12 col-sm-6">
      <h2>LifeStyle Information</h2>
      <p>Please Enter your LifeStyle Information</p>
      <form>
        <div className="mb-3 row">
          <label htmlFor="dietaryHabits" className="form-label" style={{ fontSize: 'large' }}>Dietary Habits</label>
          <div className="col-md-10">
            <select
              name="vegeterain"
              id="dietaryHabits"
              className="form-control"
              value={formData.vegeterain}
              onChange={handleChange}
            >
              <option value="">Select Dietary Habits</option>
              <option value={true}>Vegetarian</option>
              <option value={false}>Non-Vegetarian</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="lifestyle" className="form-label" style={{ fontSize: 'large' }}>Lifestyle</label>
          <div className="col-md-10">
            <label>
              <input
                type="checkbox"
                name="smoker"
                checked={formData.smoker}
                onChange={handleChange}
              />{' '}
              Smoker
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="drinker"
                checked={formData.drinker}
                onChange={handleChange}
              />{' '}
              Drinker
            </label>
          </div>
        </div>

      </form>
    </div>
  );
};

export default LifeStyleInformation;
