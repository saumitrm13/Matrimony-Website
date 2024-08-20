package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserfdDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserfdDto;
import com.sunbeam.entities.User_Family_Details;


@Service
@Transactional
public class UserfdServiceImpl implements UserfdService {
	@Autowired
	private UserfdDao userfdDao;
	
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public ApiResponse saveUserfd(UserfdDto userfd) {
		// TODO Auto-generated method stub
		User_Family_Details newUserfd = modelMapper.map(userfd, User_Family_Details.class);
		userfdDao.save(newUserfd);
		return new ApiResponse("In add user fd");
	}

}
