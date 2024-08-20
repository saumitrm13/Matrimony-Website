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
import com.sunbeam.dto.SuggestionsIdDto;
import com.sunbeam.dto.SuggestionsResponseDto;
import com.sunbeam.service.SuggestionsServiceImpl;

@RestController
@RequestMapping
public class SuggestionsController {
	@Autowired
	private SuggestionsServiceImpl suggestionsService;
	
	@PostMapping("/getSuggestions")
	public ResponseEntity<?> getSuggestions(@RequestBody SuggestionsIdDto suggestionsIdDto){
		Long id = suggestionsIdDto.getId();
		List<CardsListDto> suggestionCardsByAge = suggestionsService.suggestByAge(id);
		List<CardsListDto> suggestionCardsByEducation = suggestionsService.suggestByEducation(id);
		List<CardsListDto> suggestionCardsByReligion = suggestionsService.suggestByReligion(id);
		
		for (CardsListDto card : suggestionCardsByAge) {
		    System.out.println(card.getId() + " - " + card.getFullName() + " - " + card.getAge());
		}
		
		for (CardsListDto card : suggestionCardsByEducation) {
		    System.out.println(card.getId() + " - " + card.getFullName() + " - " + card.getAge());
		}
		
		for (CardsListDto card : suggestionCardsByReligion) {
		    System.out.println(card.getId() + " - " + card.getFullName() + " - " + card.getAge());
		}
		
		SuggestionsResponseDto response = new SuggestionsResponseDto(suggestionCardsByAge, 
                suggestionCardsByEducation, 
                suggestionCardsByReligion);
		return new ResponseEntity<>(response,HttpStatus.OK);
		
	}
}
