package com.sunbeam.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.CasteDao;
import com.sunbeam.dao.ReligionDao;
import com.sunbeam.dao.UserrdDao;
import com.sunbeam.dao.ZodiacSignTableDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserrdDto;
import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Castes;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.Religions;
import com.sunbeam.entities.User_Religion_Details;
import com.sunbeam.entities.ZodiacSignTable;
import com.sunbeam.entities.ZodiacSigns;

@Service
@Transactional
public class UserrdServiceImpl implements UserrdService {
	@Autowired
	private UserrdDao userrdDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private ReligionDao religionDao;
	
	@Autowired
	private CasteDao castedao;
	
	@Autowired
	private ZodiacSignTableDao zodiacSignDao;
	@Override
	public ApiResponse saveUserrd(UserrdDto userrd) {
		// TODO Auto-generated method stub
		User_Religion_Details newUserrd = modelMapper.map(userrd, User_Religion_Details.class);
		Religion religion = userrd.getReligion();
		Religion religionName = religionDao.findByName(religion.getReligion());
	    
		
		
		Caste caste = userrd.getCaste();
		Caste castename = castedao.findByName(caste.getCaste());
		
		
		ZodiacSignTable sign = userrd.getZodiacSign();
		ZodiacSignTable signName = zodiacSignDao.findByName(sign.getZoidac_sign());
		
		
		
		if(religionName!=null && castename!=null && signName!=null) {
			newUserrd.setCaste(castename);
			newUserrd.setReligion(religionName);
			newUserrd.setZodiacSign(signName);
			userrdDao.save(newUserrd);
		}
		else {
			return new ApiResponse("Something went wrong");
		}
		return new ApiResponse("New rd added");
	}
	
	
}
