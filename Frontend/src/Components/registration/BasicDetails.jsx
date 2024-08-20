import React from 'react';

const BasicDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ [name]: value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,  // Spread the previous state to keep existing data
      [name]: value  // Update only the field that changed
    }));
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="container">
      <h2>Basic Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-control"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Abc@mail.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date Of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            id="gender"
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value={false}>Male</option>
            <option value={true}>Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>

      
      </form>
    </div>
  );
};

export default BasicDetails;
