package com.sunbeam.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.Edit_user_basic_Details_DTO;
import com.sunbeam.entities.User_Details;
import com.sunbeam.service.Edit_user_basic_Details;
import com.sunbeam.service.UserDetailsService;
import com.sunbeam.service.UserDetailsServiceImpl;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfilePageController {
	@Autowired
	UserDetailsServiceImpl userDao;
	
	@Autowired
	private Edit_user_basic_Details userDetailsService;

	@PutMapping("/updateBasicDetails/{id}")
	public ResponseEntity<User_Details> updateUser(@RequestBody Edit_user_basic_Details_DTO request, @PathVariable Long id) {
	    try {
	        userDetailsService.updateUser(request, id);
	        return ResponseEntity.ok().build(); // Or return updated entities if needed
	    } catch (RuntimeException e) {
	        return ResponseEntity.notFound().build();
	    }
	}

    
	@GetMapping("/{id}")
	public User_Details getUserById(@PathVariable Long id) {
		System.out.println(id);
        Optional<User_Details> user = userDao.getUserDetailsById(id); 
        System.out.println(user);
        return user.get();
    }
}
