package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserldDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserldDto;
import com.sunbeam.entities.User_Lifestyle_Details;

@Service
@Transactional
public class UserldServiceImpl implements UserldService{
	
	@Autowired
	private UserldDao userldDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ApiResponse saveUserld(UserldDto userld) {
		// TODO Auto-generated method stub
		User_Lifestyle_Details newUserld = modelMapper.map(userld,User_Lifestyle_Details.class);
		
		userldDao.save(newUserld);
		return new ApiResponse("User ld added");
	}

}
