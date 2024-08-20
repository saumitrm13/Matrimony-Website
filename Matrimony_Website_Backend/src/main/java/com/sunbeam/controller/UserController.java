package com.sunbeam.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.UserDetailsDto;
import com.sunbeam.dto.UserLoggedInDto;
import com.sunbeam.dto.UseradDto;
import com.sunbeam.dto.UserbdDto;
import com.sunbeam.dto.UserfdDto;
import com.sunbeam.dto.UserldDto;
import com.sunbeam.dto.UserpdDto;
import com.sunbeam.dto.UserpredDto;
import com.sunbeam.dto.UserprodDto;
import com.sunbeam.dto.UserrdDto;
import com.sunbeam.dto.UserredDto;
import com.sunbeam.entities.User_basic_details;
import com.sunbeam.service.LoginService;
import com.sunbeam.service.UserDetailsServiceImpl;
import com.sunbeam.service.UseradServiceImpl;
import com.sunbeam.service.UserbdServiceImpl;
import com.sunbeam.service.UserfdServiceImpl;
import com.sunbeam.service.UserldServiceImpl;
import com.sunbeam.service.UserpdServiceImpl;
import com.sunbeam.service.UserpredServiceImpl;
import com.sunbeam.service.UserprodServiceImpl;
import com.sunbeam.service.UserrdServiceImpl;
import com.sunbeam.service.UserredServiceImpl;

//import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserbdServiceImpl userbdService;
	
	@Autowired
	private UserldServiceImpl userldService;
	
	@Autowired
	private UseradServiceImpl useradService;
	
	@Autowired
	private UserpdServiceImpl userpdService;
	
	@Autowired
	private UserfdServiceImpl userfdService;
	
	@Autowired
	private UserrdServiceImpl userrdService;
	
	@Autowired
	private UserredServiceImpl userredService;
	
	@Autowired
	private UserprodServiceImpl userProdService;
	
	@Autowired
	private UserpredServiceImpl userPredService;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	private LoginService logins;
	@PostMapping("/test")
	public ResponseEntity<?> test(){
		System.out.println("Test has been called");
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Data");
	}
	@PostMapping("/registerUser")
	public ResponseEntity<?> registerUser(@RequestBody UserDetailsDto userDto){
		System.out.println("In register user" + userDto.toString());
		UserbdDto userbd = new UserbdDto(userDto.getFullName(), userDto.getEmail(), userDto.getDob(), userDto.isGender(), userDto.getPassword(), userDto.getAge());
		
		UseradDto userad = new UseradDto(userDto.getTime(), userDto.getPlaceOfBirth());
		
		UserpdDto userpd = new UserpdDto(userDto.getMotherTongue(), userDto.getHeight(), userDto.getWeight(), userDto.getNationality(),
				userDto.isDisabled(), userDto.getMaritalStatus());
		
		UserldDto userld = new UserldDto(userDto.isVegeterain(),userDto.isSmoker(),userDto.isDrinker());
		
		UserfdDto userfd = new UserfdDto(userDto.getFatherName(),userDto.getMotherrName(),userDto.getTotalSiblings(),userDto.getFamilyIncome());
		
		UserrdDto userrd = new UserrdDto(userDto.getReligion(), userDto.getCaste(), userDto.getZodiacSign());
		
		UserredDto userred = new UserredDto(userDto.getCity(), userDto.getPincode());
		
		UserprodDto userprod = new UserprodDto(userDto.getEducation(), userDto.getUniversityName(), userDto.getCompanyName(), userDto.getAnnualIncome() );
		
		UserpredDto userpred = new UserpredDto(userDto.getPref_maritalStatus(),userDto.isVegeterainPreffered(),userDto.isSmokingPreffered(),userDto.isDrinkingPreffered(),userDto.getMinAge(),userDto.getMaxAge(),
				userDto.getPreferredEducation(),userDto.getPreferredCity(),userDto.getPreferredReligion(),userDto.getPreferredIncome());
		
		
		
//		System.out.println(userbd.toString()+" "+userad.toString());
//		System.out.println(userld.toString());
//		System.out.println(userfd.toString());
//		System.out.println(userred.toString());
//		System.out.println(userprod.toString());
//		System.out.println(userpred.toString());
//		System.out.println(userpd.toString());
//		System.out.println(userrd.toString());
		userbdService.saveUserbd(userbd);
		userldService.saveUserld(userld);
		useradService.saveUserad(userad);
		userpdService.saveUserpd(userpd);
		userfdService.saveUserfd(userfd);
		userrdService.saveUserrd(userrd);
		userredService.saveUserred(userred);
		userPredService.saveUserpredService(userpred);
		userProdService.saveUserprod(userprod);
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userDetailsService.saveUserDetails(userDto));
	}
	
	@PostMapping("/saveUserbd")
	public ResponseEntity<?> saveUser(@RequestBody UserbdDto userbd){
		System.out.println("In add user bd");
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userbdService.saveUserbd(userbd)+" "+userbd.getEmail());
	}
	
	@PostMapping("/saveUserld")
	public ResponseEntity<?> saveUserld(@RequestBody UserldDto userld){
		System.out.println("In add user ld");
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userldService.saveUserld(userld));
	}
	
	@PostMapping("/saveUserad")
	public ResponseEntity<?> saveUserad(@RequestBody UseradDto userad){
		System.out.println("In add user ad");
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(useradService.saveUserad(userad));
	}
	
	@PostMapping("/saveUserpd")
	public ResponseEntity<?> saveUserad(@RequestBody UserpdDto userpd){
		System.out.println("In add user pd");
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userpdService.saveUserpd(userpd));
	}
	
	@PostMapping("/saveUserfd")
	public ResponseEntity<?> saveUserfd(@RequestBody UserfdDto userfd){
		System.out.println("In add user fd");
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userfdService.saveUserfd(userfd));
	}
	
	@PostMapping("/saveUserrd")
	public ResponseEntity<?> saveUserrd(@RequestBody UserrdDto userrd){
		System.out.println("In add user rd"+userrd.toString());
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userrdService.saveUserrd(userrd));
	}
	
	@PostMapping("/saveUserred")
	public ResponseEntity<?> saveUserred(@RequestBody UserredDto userred){
		System.out.println("In add user red");
		return ResponseEntity.status(HttpStatus.CREATED).
				body(userredService.saveUserred(userred));
	}
	
	@PostMapping("/saveUserprod")
	public ResponseEntity<?> saveUserprod(@RequestBody UserprodDto userprod){
		System.out.println("In add user prod");
		return ResponseEntity.status(HttpStatus.CREATED).body(userProdService.saveUserprod(userprod));
	}
	
	@PostMapping("/saveUserpred")
	public ResponseEntity<?> saveUserpred(@RequestBody UserpredDto userpred){
		System.out.println("In add user pred");
		return ResponseEntity.status(HttpStatus.CREATED).body(userPredService.saveUserpredService(userpred));
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserLoggedInDto> loginUser(@RequestBody LoginDTO dto){
		System.out.println(dto.getEmail()+" "+ dto.getPassword());
		UserLoggedInDto user = logins.userLogin(dto.getEmail(), dto.getPassword());
		
		System.out.println(user);
		return ResponseEntity.ok(user);
	}
}
