package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.EducationDao;
import com.sunbeam.dao.UserprodDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserprodDto;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.User_Professional_Details;

@Service
@Transactional
public class UserprodServiceImpl implements UserprodService {
	
	@Autowired
	private UserprodDao userProdDao;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private EducationDao educationDao;
	
	
	@Override
	public ApiResponse saveUserprod(UserprodDto userprod) {
		// TODO Auto-generated method stub
		User_Professional_Details newUserprod = modelMapper.map(userprod, User_Professional_Details.class);
		Education education = userprod.getEducation();
		Education educationName = educationDao.findByName(education.getDegree());
		
		if(educationName!=null) {
			newUserprod.setEducation(educationName);
			userProdDao.save(newUserprod);
		}
		else {
			return new ApiResponse("Something went Wrong");
		}
		return new ApiResponse("user prod added");
	}

}
