package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CityTableDao;
import com.sunbeam.dao.EducationDao;
import com.sunbeam.dao.Marital_StatusDao;
import com.sunbeam.dao.ReligionDao;
import com.sunbeam.dao.UserpredDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserpredDto;
import com.sunbeam.entities.CityTable;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Marital_Status;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.User_Preferences_Details;

@Service
@Transactional
public class UserpredServiceImpl implements UserpredService{
	
	@Autowired
	private UserpredDao userpredDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private Marital_StatusDao maritalStatusDao;
	
	@Autowired
	private EducationDao educationDao;
	
	@Autowired
	private CityTableDao cityTableDao;
	
	@Autowired
	private ReligionDao religionDao;
	
	@Override
	public ApiResponse saveUserpredService(UserpredDto userpred) {
		// TODO Auto-generated method stub
		User_Preferences_Details newUserpred = modelMapper.map(userpred, User_Preferences_Details.class);
		Marital_Status maritalStatus = userpred.getMaritalStatus();
		Marital_Status maritalStatusName = maritalStatusDao.findByName(maritalStatus.getMaritalstatus());
		
		Education education = userpred.getPreferredEducation();
		Education educationName = educationDao.findByName(education.getDegree());
		
		CityTable cityTable = userpred.getPreferredCity();
		CityTable cityTableName = cityTableDao.findByName(cityTable.getCity());
		
		Religion religion = userpred.getPreferredReligion();
		Religion religionName = religionDao.findByName(religion.getReligion());
		
		if(maritalStatusName!=null && educationName!=null && cityTableName != null && religionName != null) {
			newUserpred.setMaritalStatus(maritalStatusName);
			newUserpred.setPreferredEducation(educationName);
			newUserpred.setPreferredCity(cityTableName);
			newUserpred.setPreferredReligion(religionName);
			userpredDao.save(newUserpred);
		}
		else {
			return new ApiResponse("Something went wrong");
		}
		return new ApiResponse("User pred added");
	}

}
