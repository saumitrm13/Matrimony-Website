package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.CardsListDto;

public interface SuggestionsService {
	List<CardsListDto> suggestByAge(Long id);
	
	List<CardsListDto> suggestByReligion(Long id);
	
	List<CardsListDto> suggestByEducation(Long id);
}
