package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.CardsListDto;

public interface InterestService {
	void showInterest(Long shownById, Long shownInId);
	
	List<Long> getInterestsCounts(Long userId);
	
	List<CardsListDto> getInterestedInNames(Long userId);
	
	List<CardsListDto> getInterestsShownByNames(Long userId);
}
