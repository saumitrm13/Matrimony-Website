package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UseradDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UseradDto;
import com.sunbeam.entities.User_Astrological_Details;


@Service
@Transactional
public class UseradServiceImpl implements UseradService{
	@Autowired
	private UseradDao useradDao;
	
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public ApiResponse saveUserad(UseradDto userad) {
		// TODO Auto-generated method stub
		User_Astrological_Details newUserad = modelMapper.map(userad,User_Astrological_Details.class);
		useradDao.save(newUserad);
		return new ApiResponse("User ad added");
	}

}
