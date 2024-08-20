package com.sunbeam.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CardsListDto;
import com.sunbeam.service.InterestServiceImpl;

@RestController
@RequestMapping()
public class InterestController {
	@Autowired
	private InterestServiceImpl interestService;
	
	@PostMapping ("/showInterest/{shownById}/{shownInId}")
	public ResponseEntity<?> showInterest(@PathVariable Long shownById,@PathVariable Long shownInId){
		interestService.showInterest(shownById, shownInId);
		System.out.println("In interest ctrl");
		return ResponseEntity.ok("Interest added by "+shownById+" in "+ shownInId);
		
	}
	
	@GetMapping("/getInterestsList/{userId}")
	public ResponseEntity<?> geIntereststLists(@PathVariable Long userId){
		List<Long> interestsCount = interestService.getInterestsCounts(userId);
		return new ResponseEntity<>(interestsCount,HttpStatus.OK);
	}
	
	@GetMapping("/getInterestedInNames/{userId}")
	public ResponseEntity<?> getInterestedInNames(@PathVariable Long userId){
		List<CardsListDto> interestedInNames = interestService.getInterestedInNames(userId);
		List<CardsListDto> interestsShownByNames = interestService.getInterestsShownByNames(userId);
		List<List<CardsListDto>> list = new ArrayList<List<CardsListDto>>();
		list.add(interestedInNames);
		list.add(interestsShownByNames);
		return new ResponseEntity<> (list,HttpStatus.OK);
	}
	
}
