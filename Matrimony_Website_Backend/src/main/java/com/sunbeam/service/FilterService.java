package com.sunbeam.service;


import java.util.List;

import com.sunbeam.dto.CardsListDto;
import com.sunbeam.dto.FilterDto;
public interface FilterService {
	List<CardsListDto> getFilterResults(FilterDto filterDto);
}
