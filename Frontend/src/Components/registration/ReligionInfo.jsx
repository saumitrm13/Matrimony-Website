import React from 'react';

const ReligionInfo = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Handle nested object updates
    if (name.includes('.')) {
      const [parent, key] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [key]: value,
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
      <h2>Religion Info</h2>
      <p>Please Enter your Religion Info</p>
      <form>
        <div className="mb-3 row">
          <label htmlFor="religion" className="form-label" style={{ fontSize: 'large' }}>Religion</label>
          <div className="col-md-10">
            <select
              name="religion.religion"
              id="religion"
              className="form-control"
              value={formData.religion.religion}
              onChange={handleChange}
            >
              <option value="">Select Religion</option>
  <option value="Hindu">Hindu</option>
  <option value="Muslim">Muslim</option>
  <option value="Sikh">Sikh</option>
  <option value="Christian">Christian</option>
  <option value="Jain">Jain</option>
  <option value="Judaism">Judaism</option>
  <option value="Buddhism">Buddhism</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="caste" className="form-label" style={{ fontSize: 'large' }}>Caste/Sect</label>
          <div className="col-md-10">
            <select
              name="caste.caste"
              id="caste"
              className="form-control"
              value={formData.caste.caste}
              onChange={handleChange}
            >
              <option value="">Select Caste</option>
  <option value="Brahmin">Brahmin</option>
  <option value="Kshatriya">Kshatriya</option>
  <option value="Yadav">Yadav</option>
  <option value="Bhumihar">Bhumihar</option>
  <option value="Gujjar">Gujjar</option>
  <option value="Maratha">Maratha</option>
  <option value="Kumbhar">Kumbhar</option>
  <option value="Chambhar">Chambhar</option>
  <option value="Jat">Jat</option>
  <option value="Lohar">Lohar</option>
  <option value="Kurmi">Kurmi</option>
  <option value="Teli">Teli</option>
  <option value="Qureshi">Qureshi</option>
  <option value="Khan">Khan</option>
  <option value="Pathan">Pathan</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="zodiacSign" className="form-label" style={{ fontSize: 'large' }}>Zodiac Sign</label>
          <div className="col-md-10">
            <select
              name="zodiacSign.zodiacSign"
              id="zodiacSign"
              className="form-control"
              value={formData.zodiacSign.zodiacSign}
              onChange={handleChange}
            >
              <option value="">Select Zodiac Sign</option>
  <option value="Aries">Aries</option>
  <option value="Taurus">Taurus</option>
  <option value="Gemini">Gemini</option>
  <option value="Cancer">Cancer</option>
  <option value="Leo">Leo</option>
  <option value="Virgo">Virgo</option>
  <option value="Libra">Libra</option>
  <option value="Scorpio">Scorpio</option>
  <option value="Sagittarius">Sagittarius</option>
  <option value="Capricorn">Capricorn</option>
  <option value="Aquarius">Aquarius</option>
  <option value="Pisces">Pisces</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReligionInfo;
