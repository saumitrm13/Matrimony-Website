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
import com.sunbeam.dto.SearchNameDto;
import com.sunbeam.service.SearchServiceImpl;



@RestController
@RequestMapping
public class SearchController {
	@Autowired
	private SearchServiceImpl searchService;
	
	@PostMapping("/search")
	public ResponseEntity<?> searchProfilesByName(@RequestBody SearchNameDto searchNameDto){
		List<CardsListDto> searchCards = searchService.searchProfilesByName(searchNameDto.getId(),searchNameDto.getSearchString());
		
		return new ResponseEntity<>(searchCards,HttpStatus.OK);
	}
}
