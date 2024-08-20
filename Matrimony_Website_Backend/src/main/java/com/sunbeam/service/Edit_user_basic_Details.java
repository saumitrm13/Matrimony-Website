package com.sunbeam.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDetailsDao;
import com.sunbeam.dao.UserbdDao;
import com.sunbeam.dto.Edit_user_basic_Details_DTO;
import com.sunbeam.entities.User_Details;
import com.sunbeam.entities.User_basic_details;

@Service
public class Edit_user_basic_Details {
	@Autowired
	UserDetailsDao udao;
	
	@Autowired
	UserbdDao ubdao;
	
	public User_Details updateUserDetails(Edit_user_basic_Details_DTO request,Long id) {
        Optional<User_Details> existingUserDetailsOpt = udao.findById(id);
        if (existingUserDetailsOpt.isEmpty()) {
            throw new RuntimeException("User Details not found");
        }

        User_Details userDetails = existingUserDetailsOpt.get();
        if (request.getFullName() != null) {
            userDetails.setFullName(request.getFullName());
        }
        if (request.getDob() != null) {
            userDetails.setDob(request.getDob());
        }
        if (request.getAge() != 0) {
            userDetails.setAge(request.getAge());
        }
        userDetails.setGender(request.getGender()); // Assuming gender is always provided

        return udao.save(userDetails);
    }

    public User_basic_details updateUserBasicDetails(Edit_user_basic_Details_DTO request, Long id) {
        Optional<User_basic_details> existingUserBasicDetailsOpt = ubdao.findById(id);
        if (existingUserBasicDetailsOpt.isEmpty()) {
            throw new RuntimeException("User Basic Details not found");
        }

        User_basic_details basicDetails = existingUserBasicDetailsOpt.get();
        if (request.getFullName() != null) {
            basicDetails.setFullName(request.getFullName());
        }
        if (request.getAge() != 0) {
            basicDetails.setAge(request.getAge());
        }
        if (request.getDob() != null) {
            basicDetails.setDob(request.getDob());
        }
        basicDetails.setGender(request.getGender());
   
        
        return ubdao.save(basicDetails);
    }

    public void updateUser(Edit_user_basic_Details_DTO request, Long id) {
        updateUserDetails(request, id);
        updateUserBasicDetails(request, id);
    }
}
