package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CityTableDao;
import com.sunbeam.dao.UserredDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserredDto;
import com.sunbeam.entities.CityTable;
import com.sunbeam.entities.User_Residence_Details;

@Service
@Transactional
public class UserredServiceImpl implements UserredService {
	@Autowired
	private UserredDao userredDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private CityTableDao cityTableDao; 
	
	@Override
	public ApiResponse saveUserred(UserredDto userredDto) {
		// TODO Auto-generated method stub
		User_Residence_Details newUserred = modelMapper.map(userredDto, User_Residence_Details.class);
		CityTable cityTable = userredDto.getCity();
		CityTable cityTableName = cityTableDao.findByName(cityTable.getCity());
		
		if(cityTableName!=null) {
			newUserred.setCity(cityTableName);
			userredDao.save(newUserred);
		}
		else {
			return new ApiResponse("Something went wrong");
		}
		return new ApiResponse("user rd added");
	}

}
