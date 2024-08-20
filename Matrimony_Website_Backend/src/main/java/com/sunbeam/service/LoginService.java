package com.sunbeam.service;

import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserbdDao;
import com.sunbeam.dto.UserLoggedInDto;
import com.sunbeam.entities.User_basic_details;

@Service
public class LoginService {
	@Autowired
	UserbdDao udao;
	
	
	public UserLoggedInDto userLogin(String email, String password){
		UserLoggedInDto user = udao.findByEmailAndPassword(email, password).orElseThrow();
		return user;
	}
}
