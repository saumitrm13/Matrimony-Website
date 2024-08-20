import React from 'react';

const PartnerPreference = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (name.includes('.')) {
      const [parent, key] = name.split('.');
      setFormData(prevData => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [key]: value
        }
      }));
    } else if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  

  return (
    <div className="container col-md-12 col-sm-6">
      <h2>Partner Preference</h2>
      <p>Please Enter Your Partner Preferences</p>
      <form>
        <div className="mb-3 row">
          <label htmlFor="pref_maritalStatus" className="form-label" style={{ fontSize: 'large' }}>
            Marital Status Preference
          </label>
          <div className="col-md-10">
            <select
              name="pref_maritalStatus.maritalstatus"
              id="pref_maritalStatus"
              className="form-control"
              value={formData.pref_maritalStatus.maritalstatus}
              onChange={handleChange}
            >
              <option value="">Select Marital Status</option>
  <option value="Awaiting Divorce">Awaiting Divorce</option>
  <option value="Unmarried">Unmarried</option>
  <option value="Divorced">Divorced</option>
  <option value="Widowed">Widowed</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="vegeterainPreffered" className="form-label" style={{ fontSize: 'large' }}>
            Dietary Habits
          </label>
          <div className="col-md-10">
            <select
              name="vegeterainPreffered"
              id="vegeterainPreffered"
              className="form-control"
              value={formData.vegeterainPreffered}
              onChange={handleChange}
            >
              <option value="">Select Dietary Habits</option>
              <option value={true}>Vegetarian</option>
              <option value={false}>Non-Vegetarian</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="smokingPreffered" className="form-label" style={{ fontSize: 'large' }}>
            Lifestyle Preferences
          </label>
          <div className="col-md-10">
            <label>
              <input
                type="checkbox"
                name="smokingPreffered"
                checked={formData.smokingPreffered}
                onChange={handleChange}
              />{' '}
              Smoker
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="drinkingPreffered"
                checked={formData.drinkingPreffered}
                onChange={handleChange}
              />{' '}
              Drinker
            </label>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="minAge" className="form-label" style={{ fontSize: 'large' }}>
            Age Range
          </label>
          <div className="col-md-5">
            <input
              type="number"
              name="minAge"
              id="minAge"
              className="form-control"
              value={formData.minAge}
              onChange={handleChange}
              placeholder="Min Age"
            />
          </div>
          <div className="col-md-5">
            <input
              type="number"
              name="maxAge"
              id="maxAge"
              className="form-control"
              value={formData.maxAge}
              onChange={handleChange}
              placeholder="Max Age"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="preferredEducation" className="form-label" style={{ fontSize: 'large' }}>
            Highest Qualification
          </label>
          <div className="col-md-10">
            <select
              name="preferredEducation.degree"
              id="preferredEducation"
              className="form-control"
              value={formData.preferredEducation.degree}
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
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="preferredCity" className="form-label" style={{ fontSize: 'large' }}>
            Preferred City
          </label>
          <div className="col-md-10">
            <select
              name="preferredCity.city"
              id="preferredCity"
              className="form-control"
              value={formData.preferredCity.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Kolkata">Kolkata</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Chennai">Chennai</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Pune">Pune</option>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Surat">Surat</option>
  <option value="Lucknow">Lucknow</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Kanpur">Kanpur</option>
  <option value="Mirzapur">Mirzapur</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Ghaziabad">Ghaziabad</option>
  <option value="Supaul">Supaul</option>
  <option value="Vadodara">Vadodara</option>
  <option value="Rajkot">Rajkot</option>
  <option value="Vishakhapatnam">Vishakhapatnam</option>
  <option value="Indore">Indore</option>
  <option value="Thane">Thane</option>
  <option value="Bhopal">Bhopal</option>
  <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
  <option value="Patna">Patna</option>
  <option value="Bilaspur">Bilaspur</option>
  <option value="Ludhiana">Ludhiana</option>
  <option value="Agra">Agra</option>
  <option value="Madurai">Madurai</option>
  <option value="Jamshedpur">Jamshedpur</option>
  <option value="Prayagraj">Prayagraj</option>
  <option value="Nasik">Nasik</option>
  <option value="Faridabad">Faridabad</option>
  <option value="Meerut">Meerut</option>
  <option value="Jabalpur">Jabalpur</option>
  <option value="Kalyan">Kalyan</option>
  <option value="Vasai-Virar">Vasai-Virar</option>
  <option value="Najafgarh">Najafgarh</option>
  <option value="Varanasi">Varanasi</option>
  <option value="Srinagar">Srinagar</option>
  <option value="Aurangabad">Aurangabad</option>
  <option value="Dhanbad">Dhanbad</option>
  <option value="Amritsar">Amritsar</option>
  <option value="Aligarh">Aligarh</option>
  <option value="Guwahati">Guwahati</option>
  <option value="Howrah">Howrah</option>
  <option value="Ranchi">Ranchi</option>
  <option value="Gwalior">Gwalior</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Haldwani">Haldwani</option>
  <option value="Vijayawada">Vijayawada</option>
  <option value="Jodhpur">Jodhpur</option>
  <option value="Raipur">Raipur</option>
  <option value="Kota">Kota</option>
  <option value="Bhayandar">Bhayandar</option>
  <option value="Loni">Loni</option>
  <option value="Ambattur">Ambattur</option>
  <option value="Salt Lake City">Salt Lake City</option>
  <option value="Bhatpara">Bhatpara</option>
  <option value="Kukatpalli">Kukatpalli</option>
  <option value="Dasarahalli">Dasarahalli</option>
  <option value="Muzaffarpur">Muzaffarpur</option>
  <option value="Oulgaret">Oulgaret</option>
  <option value="New Delhi">New Delhi</option>
  <option value="Tiruvottiyur">Tiruvottiyur</option>
  <option value="Puducherry">Puducherry</option>
  <option value="Byatarayanpur">Byatarayanpur</option>
  <option value="Pallavaram">Pallavaram</option>
  <option value="Secunderabad">Secunderabad</option>
  <option value="Shimla">Shimla</option>
  <option value="Puri">Puri</option>
  <option value="Murtazabad">Murtazabad</option>
  <option value="Shrirampur">Shrirampur</option>
  <option value="Chandannagar">Chandannagar</option>
  <option value="Sultanpur Mazra">Sultanpur Mazra</option>
  <option value="Krishnanagar">Krishnanagar</option>
  <option value="Barakpur">Barakpur</option>
  <option value="Bhalswa Jahangirpur">Bhalswa Jahangirpur</option>
  <option value="Nangloi Jat">Nangloi Jat</option>
  <option value="Balasore">Balasore</option>
  <option value="Dalupura">Dalupura</option>
  <option value="Yelahanka">Yelahanka</option>
  <option value="Titagarh">Titagarh</option>
  <option value="Dam Dam">Dam Dam</option>
  <option value="Bansbaria">Bansbaria</option>
  <option value="Madhavaram">Madhavaram</option>
  <option value="Abbigiri">Abbigiri</option>
  <option value="Baj Baj">Baj Baj</option>
  <option value="Garhi">Garhi</option>
  <option value="Mirpeta">Mirpeta</option>
  <option value="Nerkunram">Nerkunram</option>
  <option value="Kendraparha">Kendraparha</option>
  <option value="Sijua">Sijua</option>
  <option value="Manali">Manali</option>
  <option value="Kankuria">Kankuria</option>
  <option value="Chakapara">Chakapara</option>
  <option value="Pappakurichchhi">Pappakurichchhi</option>
  <option value="Herohalli">Herohalli</option>
  <option value="Madipakkam">Madipakkam</option>
  <option value="Sabalpur">Sabalpur</option>
  <option value="Bauria">Bauria</option>
  <option value="Salua">Salua</option>
  <option value="Chik Banavar">Chik Banavar</option>
  <option value="Jalhalli">Jalhalli</option>
  <option value="Chinnasekkadu">Chinnasekkadu</option>
  <option value="Jethuli">Jethuli</option>
  <option value="Nagtala">Nagtala</option>
  <option value="Pakri">Pakri</option>
  <option value="Hunasamaranhalli">Hunasamaranhalli</option>
  <option value="Hesarghetta">Hesarghetta</option>
  <option value="Bommayapalaiyam">Bommayapalaiyam</option>
  <option value="Gundur">Gundur</option>
  <option value="Punadih">Punadih</option>
  <option value="Hariladih">Hariladih</option>
  <option value="Alawalpur">Alawalpur</option>
  <option value="Madnaikanhalli">Madnaikanhalli</option>
  <option value="Bagalur">Bagalur</option>
  <option value="Kadiganahalli">Kadiganahalli</option>
  <option value="Khanpur Zabti">Khanpur Zabti</option>
  <option value="Mahuli">Mahuli</option>
  <option value="Zeyadah Kot">Zeyadah Kot</option>
  <option value="Arshakunti">Arshakunti</option>
  <option value="Mirchi">Mirchi</option>
  <option value="Sonudih">Sonudih</option>
  <option value="Bayandhalli">Bayandhalli</option>
  <option value="Sondekoppa">Sondekoppa</option>
  <option value="Babura">Babura</option>
  <option value="Madavar">Madavar</option>
  <option value="Kadabgeri">Kadabgeri</option>
  <option value="Nanmangalam">Nanmangalam</option>
  <option value="Taliganja">Taliganja</option>
  <option value="Tarchha">Tarchha</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="preferredReligion" className="form-label" style={{ fontSize: 'large' }}>
            Preferred Religion
          </label>
          <div className="col-md-10">
            <select
              name="preferredReligion.religion"
              id="preferredReligion"
              className="form-control"
              value={formData.preferredReligion.religion}
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
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="preferredIncome" className="form-label" style={{ fontSize: 'large' }}>
            Annual Income
          </label>
          <div className="col-md-10">
            <input
              type="number"
              name="preferredIncome"
              id="preferredIncome"
              className="form-control"
              value={formData.preferredIncome}
              onChange={handleChange}
              placeholder="Enter Annual Income"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PartnerPreference;
