package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserbdDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserbdDto;
import com.sunbeam.entities.User_basic_details;

@Service
@Transactional
public class UserbdServiceImpl implements UserbdService {
	
	@Autowired
	private UserbdDao userbdDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ApiResponse saveUserbd(UserbdDto userbd) {
		// TODO Auto-generated method stub
		User_basic_details newUserbd = modelMapper.map(userbd, User_basic_details.class);
		
		if(userbdDao.existsByEmail(userbd.getEmail())) {
			return new ApiResponse("User email already registered!!");
		}
		else {
			userbdDao.save(newUserbd);
			return new ApiResponse("User registerd");
		}

	}

}
