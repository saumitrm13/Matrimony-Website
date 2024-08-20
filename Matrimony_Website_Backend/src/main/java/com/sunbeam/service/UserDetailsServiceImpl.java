package com.sunbeam.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CasteDao;
import com.sunbeam.dao.CityTableDao;
import com.sunbeam.dao.EducationDao;
import com.sunbeam.dao.Marital_StatusDao;
import com.sunbeam.dao.MotherTongueDao;
import com.sunbeam.dao.NationalitiesDao;
import com.sunbeam.dao.ReligionDao;
import com.sunbeam.dao.UserDetailsDao;
import com.sunbeam.dao.ZodiacSignTableDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserDetailsDto;
import com.sunbeam.entities.Caste;
import com.sunbeam.entities.CityTable;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Marital_Status;
import com.sunbeam.entities.MotherTongue;
import com.sunbeam.entities.Nationality;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.User_Details;
import com.sunbeam.entities.ZodiacSignTable;


@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private UserDetailsDao userDetailsDao;
	
	@Autowired
	private MotherTongueDao motherTongueDao;
	
	@Autowired
	private NationalitiesDao nationalityDao;
	
	@Autowired
	private Marital_StatusDao maritalStatusDao;
	
	@Autowired
	private EducationDao educationDao;
	
	@Autowired
	private CityTableDao cityTableDao;
	
	@Autowired
	private ReligionDao religionDao;
	
	@Autowired
	private CasteDao castedao;
	
	@Autowired
	private ZodiacSignTableDao zodiacSignDao;
	
	 public Optional<User_Details> getUserDetailsById(Long id) {
	        return userDetailsDao.findById(id);
	    }
	
	@Override
	public ApiResponse saveUserDetails(UserDetailsDto userDto) {
		// TODO Auto-generated method stub
		User_Details newUser = modelMapper.map(userDto, User_Details.class);
		Religion religion = userDto.getReligion();
		Religion religionName = religionDao.findByName(religion.getReligion());
	    
		Religion pref_religion = userDto.getPreferredReligion();
		Religion pref_religionName = religionDao.findByName(religion.getReligion());
		
		Caste caste = userDto.getCaste();
		Caste castename = castedao.findByName(caste.getCaste());
		
		
		ZodiacSignTable sign = userDto.getZodiacSign();
		ZodiacSignTable signName = zodiacSignDao.findByName(sign.getZoidac_sign());
		
		CityTable cityTable = userDto.getCity();
		CityTable cityTableName = cityTableDao.findByName(cityTable.getCity());
		
		CityTable pref_city = userDto.getPreferredCity();
		CityTable pref_cityName = cityTableDao.findByName(cityTable.getCity());
		
		Education education = userDto.getEducation();
		Education educationName = educationDao.findByName(education.getDegree());
		
		Education pref_education = userDto.getPreferredEducation();
		Education pref_educationName = educationDao.findByName(education.getDegree());
		
		MotherTongue motherTongue = userDto.getMotherTongue();
		MotherTongue motherTongueName = motherTongueDao.findByName(motherTongue.getMotherTongue());
		
		Nationality nationality = userDto.getNationality();
		Nationality nationalityName = nationalityDao.findByName(nationality.getNationality());
		
		Marital_Status maritalStatus = userDto.getMaritalStatus();
		Marital_Status maritalStatusName = maritalStatusDao.findByName(maritalStatus.getMaritalstatus());
		
		Marital_Status pref_maritalStatus = userDto.getPref_maritalStatus();
		Marital_Status pref_maritalStatusName = maritalStatusDao.findByName(maritalStatus.getMaritalstatus());
		
		if(religionName!=null && castename!=null && signName!=null && cityTableName!=null &&
				educationName!=null && pref_educationName!=null && pref_cityName!=null &&
				motherTongueName!=null && nationalityName!=null && maritalStatusName!=null
				&& pref_maritalStatusName!=null && pref_religionName!=null ) {
			newUser.setPref_maritalStatus(pref_maritalStatusName);
			newUser.setPreferredEducation(pref_educationName);;
			newUser.setPreferredCity(pref_cityName);
			newUser.setPreferredReligion(pref_religionName);
			newUser.setMotherTongue(motherTongueName);
			newUser.setNationality(nationalityName);
			newUser.setMaritalStatus(maritalStatusName);
			newUser.setEducation(educationName);
			newUser.setCaste(castename);
			newUser.setReligion(religionName);
			newUser.setZodiacSign(signName);
			newUser.setCity(cityTableName);
			
			userDetailsDao.save(newUser);
		}
		
		else {
			return new ApiResponse("Something went Wrong");
		}
		return new ApiResponse("User registered");
	}

}
