import React from 'react';

const PersonalDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,  // Spread the previous state to keep existing data
  //     [name]: value  // Update only the field that changed
  //   }));
  // };

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
  

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="container">
      <h2>Personal Details</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="motherTongue" className="form-label">Mother Tongue</label>
          <select
            id="motherTongue"
            name="motherTongue.motherTongue"
            className="form-control"
            value={formData.motherTongue.motherTongue}
            onChange={handleChange}
          >
            <option value="">Select Mother Tongue</option>
            <option value="Assamese">Assamese</option>
            <option value="Bengali">Bengali</option>
            <option value="Bodo">Bodo</option>
  <option value="Dogri">Dogri</option>
  <option value="English">English</option>
  <option value="Gujarati">Gujarati</option>
  <option value="Hindi">Hindi</option>
  <option value="Kannada">Kannada</option>
  <option value="Kashmiri">Kashmiri</option>
  <option value="Konkani">Konkani</option>
  <option value="Maithili">Maithili</option>
  <option value="Malayalam">Malayalam</option>
  <option value="Manipuri">Manipuri</option>
  <option value="Marathi">Marathi</option>
  <option value="Nepali">Nepali</option>
  <option value="Odia">Odia</option>
  <option value="Punjabi">Punjabi</option>
  <option value="Sanskrit">Sanskrit</option>
  <option value="Santali">Santali</option>
  <option value="Sindhi">Sindhi</option>
  <option value="Tamil">Tamil</option>
  <option value="Telugu">Telugu</option>
  <option value="Urdu">Urdu</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="height" className="form-label">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            className="form-control"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter height in cm"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            className="form-control"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter weight in kg"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nationality" className="form-label">Nationality</label>
          <select
            id="nationality"
            name="nationality.nationality"
            className="form-control"
            value={formData.nationality.nationality}
            onChange={handleChange}
          >
            <option value="">Select Nationality</option>
  <option value="Afghan">Afghan</option>
  <option value="Albanian">Albanian</option>
  <option value="Algerian">Algerian</option>
  <option value="American">American</option>
  <option value="Andorran">Andorran</option>
  <option value="Angolan">Angolan</option>
  <option value="Antiguan">Antiguan</option>
  <option value="Argentine">Argentine</option>
  <option value="Armenian">Armenian</option>
  <option value="Australian">Australian</option>
  <option value="Austrian">Austrian</option>
  <option value="Azerbaijani">Azerbaijani</option>
  <option value="Bahamian">Bahamian</option>
  <option value="Bahraini">Bahraini</option>
  <option value="Bangladeshi">Bangladeshi</option>
  <option value="Barbadian">Barbadian</option>
  <option value="Belarusian">Belarusian</option>
  <option value="Belgian">Belgian</option>
  <option value="Belizean">Belizean</option>
  <option value="Beninese">Beninese</option>
  <option value="Bhutanese">Bhutanese</option>
  <option value="Bolivian">Bolivian</option>
  <option value="Bosnian">Bosnian</option>
  <option value="Botswanan">Botswanan</option>
  <option value="Brazilian">Brazilian</option>
  <option value="British">British</option>
  <option value="Bruneian">Bruneian</option>
  <option value="Bulgarian">Bulgarian</option>
  <option value="Burkinabe">Burkinabe</option>
  <option value="Burmese">Burmese</option>
  <option value="Burundian">Burundian</option>
  <option value="Cambodian">Cambodian</option>
  <option value="Cameroonian">Cameroonian</option>
  <option value="Canadian">Canadian</option>
  <option value="Cape Verdean">Cape Verdean</option>
  <option value="Central African">Central African</option>
  <option value="Chadian">Chadian</option>
  <option value="Chilean">Chilean</option>
  <option value="Chinese">Chinese</option>
  <option value="Colombian">Colombian</option>
  <option value="Comoran">Comoran</option>
  <option value="Congolese">Congolese</option>
  <option value="Costa Rican">Costa Rican</option>
  <option value="Croatian">Croatian</option>
  <option value="Cuban">Cuban</option>
  <option value="Cypriot">Cypriot</option>
  <option value="Czech">Czech</option>
  <option value="Danish">Danish</option>
  <option value="Djiboutian">Djiboutian</option>
  <option value="Dominican">Dominican</option>
  <option value="Dutch">Dutch</option>
  <option value="East Timorese">East Timorese</option>
  <option value="Ecuadorean">Ecuadorean</option>
  <option value="Egyptian">Egyptian</option>
  <option value="Emirati">Emirati</option>
  <option value="English">English</option>
  <option value="Equatorial Guinean">Equatorial Guinean</option>
  <option value="Eritrean">Eritrean</option>
  <option value="Estonian">Estonian</option>
  <option value="Ethiopian">Ethiopian</option>
  <option value="Fijian">Fijian</option>
  <option value="Finnish">Finnish</option>
  <option value="French">French</option>
  <option value="Gabonese">Gabonese</option>
  <option value="Gambian">Gambian</option>
  <option value="Georgian">Georgian</option>
  <option value="German">German</option>
  <option value="Ghanaian">Ghanaian</option>
  <option value="Greek">Greek</option>
  <option value="Grenadian">Grenadian</option>
  <option value="Guatemalan">Guatemalan</option>
  <option value="Guinean">Guinean</option>
  <option value="Guinea-Bissauan">Guinea-Bissauan</option>
  <option value="Guyanese">Guyanese</option>
  <option value="Haitian">Haitian</option>
  <option value="Honduran">Honduran</option>
  <option value="Hungarian">Hungarian</option>
  <option value="Icelander">Icelander</option>
  <option value="Indian">Indian</option>
  <option value="Indonesian">Indonesian</option>
  <option value="Iranian">Iranian</option>
  <option value="Iraqi">Iraqi</option>
  <option value="Irish">Irish</option>
  <option value="Israeli">Israeli</option>
  <option value="Italian">Italian</option>
  <option value="Ivorian">Ivorian</option>
  <option value="Jamaican">Jamaican</option>
  <option value="Japanese">Japanese</option>
  <option value="Jordanian">Jordanian</option>
  <option value="Kazakhstani">Kazakhstani</option>
  <option value="Kenyan">Kenyan</option>
  <option value="Kiribati">Kiribati</option>
  <option value="North Korean">North Korean</option>
  <option value="South Korean">South Korean</option>
  <option value="Kuwaiti">Kuwaiti</option>
  <option value="Kyrgyz">Kyrgyz</option>
  <option value="Laotian">Laotian</option>
  <option value="Latvian">Latvian</option>
  <option value="Lebanese">Lebanese</option>
  <option value="Lesotho">Lesotho</option>
  <option value="Liberian">Liberian</option>
  <option value="Libyan">Libyan</option>
  <option value="Liechtensteiner">Liechtensteiner</option>
  <option value="Lithuanian">Lithuanian</option>
  <option value="Luxembourger">Luxembourger</option>
  <option value="Macedonian">Macedonian</option>
  <option value="Malagasy">Malagasy</option>
  <option value="Malawian">Malawian</option>
  <option value="Malaysian">Malaysian</option>
  <option value="Maldivian">Maldivian</option>
  <option value="Malien">Malien</option>
  <option value="Maltese">Maltese</option>
  <option value="Marshallese">Marshallese</option>
  <option value="Mauritanian">Mauritanian</option>
  <option value="Mauritian">Mauritian</option>
  <option value="Mexican">Mexican</option>
  <option value="Micronesian">Micronesian</option>
  <option value="Moldovan">Moldovan</option>
  <option value="Monacan">Monacan</option>
  <option value="Mongolian">Mongolian</option>
  <option value="Montenegrin">Montenegrin</option>
  <option value="Moroccan">Moroccan</option>
  <option value="Mosotho">Mosotho</option>
  <option value="Mozambican">Mozambican</option>
  <option value="Namibian">Namibian</option>
  <option value="Nauruan">Nauruan</option>
  <option value="Nepalese">Nepalese</option>
  <option value="New Zealander">New Zealander</option>
  <option value="Nicaraguan">Nicaraguan</option>
  <option value="Nigerian">Nigerian</option>
  <option value="Nigerien">Nigerien</option>
  <option value="Niuean">Niuean</option>
  <option value="Norwegian">Norwegian</option>
  <option value="Omani">Omani</option>
  <option value="Pakistani">Pakistani</option>
  <option value="Palauan">Palauan</option>
  <option value="Panamanian">Panamanian</option>
  <option value="Papua New Guinean">Papua New Guinean</option>
  <option value="Paraguayan">Paraguayan</option>
  <option value="Peruvian">Peruvian</option>
            {/* Add other options */}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="disabled" className="form-label">Specially Abled</label>
          <select
            id="disabled"
            name="disabled"
            className="form-control"
            value={formData.disabled}
            onChange={handleChange}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
          <select
            id="maritalStatus"
            name="maritalStatus.maritalstatus"
            className="form-control"
            value={formData.maritalStatus.maritalstatus}
            onChange={handleChange}
          >
            <option value="">Select Marital Status</option>
  <option value="Awaiting Divorce">Awaiting Divorce</option>
  <option value="Unmarried">Unmarried</option>
  <option value="Divorced">Divorced</option>
  <option value="Widowed">Widowed</option>
            {/* Add other options */}
          </select>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
