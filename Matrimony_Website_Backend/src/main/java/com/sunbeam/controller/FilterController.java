package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.CardsListDto;
import com.sunbeam.dto.FilterDto;
import com.sunbeam.service.FilterServiceImpl;

@RestController
@RequestMapping()
public class FilterController {
	@Autowired
	private FilterServiceImpl filterService;
	
	@PostMapping("/filter")
	public ResponseEntity<?> filterSuggestions(@RequestBody FilterDto filterDto){
		System.out.println("In filters");
		List<CardsListDto> cards = filterService.getFilterResults(filterDto);
		for (CardsListDto card : cards) {
		    System.out.println(card.getId() + " - " + card.getFullName() + " - " + card.getAge());
		}
		return new ResponseEntity<>(cards, HttpStatus.OK);
	}
}
