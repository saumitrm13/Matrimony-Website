package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.CardsListDto;

public interface SearchService {
	List<CardsListDto> searchProfilesByName(Long id,String searchString);
}
