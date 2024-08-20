package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.Marital_StatusDao;
import com.sunbeam.dao.MotherTongueDao;
import com.sunbeam.dao.NationalitiesDao;
import com.sunbeam.dao.UserpdDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserpdDto;
import com.sunbeam.entities.Marital_Status;
import com.sunbeam.entities.MotherTongue;
import com.sunbeam.entities.Nationality;
import com.sunbeam.entities.User_Personal_Details;

@Service
@Transactional
public class UserpdServiceImpl implements UserpdService{
	@Autowired
	private UserpdDao userpdDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private MotherTongueDao motherTongueDao;
	
	@Autowired
	private NationalitiesDao nationalityDao;
	
	@Autowired
	private Marital_StatusDao maritalStatusDao;
	
	@Override
	public ApiResponse saveUserpd(UserpdDto userpd) {
		// TODO Auto-generated method stub
		User_Personal_Details newUserpd = modelMapper.map(userpd, User_Personal_Details.class);
		MotherTongue motherTongue = userpd.getMotherTongue();
		MotherTongue motherTongueName = motherTongueDao.findByName(motherTongue.getMotherTongue());
		
		Nationality nationality = userpd.getNationality();
		Nationality nationalityName = nationalityDao.findByName(nationality.getNationality());
		
		Marital_Status maritalStatus = userpd.getMaritalStatus();
		Marital_Status maritalStatusName = maritalStatusDao.findByName(maritalStatus.getMaritalstatus());
		
		if(motherTongueName!=null && nationalityName!=null && maritalStatusName!=null) {
			newUserpd.setMotherTongue(motherTongueName);
			newUserpd.setNationality(nationalityName);
			newUserpd.setMaritalStatus(maritalStatusName);
			userpdDao.save(newUserpd);
		}
		else {
			System.out.println(motherTongueName);
			System.out.println(nationalityName);
			System.out.println(maritalStatusName);
			
			return new ApiResponse("Something went wrong");
		}
		
		return new ApiResponse("User pd added");
	}

}
