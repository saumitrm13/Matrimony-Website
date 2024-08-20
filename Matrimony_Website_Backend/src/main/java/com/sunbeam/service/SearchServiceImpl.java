package com.sunbeam.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserbdDao;
import com.sunbeam.dto.CardsListDto;

@Service
@Transactional
public class SearchServiceImpl implements SearchService {
	@Autowired
	private UserbdDao userbDao;
	
	@Override
	public List<CardsListDto> searchProfilesByName(Long id,String searchString) {
		// TODO Auto-generated method stub
		List<CardsListDto> searchCards = userbDao.searchByName(id,searchString);
		return searchCards;
	}
	
}
