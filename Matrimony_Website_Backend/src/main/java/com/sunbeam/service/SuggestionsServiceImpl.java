package com.sunbeam.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDetailsDao;
import com.sunbeam.dao.UserbdDao;
import com.sunbeam.dao.UserpredDao;
import com.sunbeam.dao.UserprodDao;
import com.sunbeam.dao.UserrdDao;
import com.sunbeam.dto.AgeDto;
import com.sunbeam.dto.CardsListDto;
import com.sunbeam.dto.UserpredDto;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Religion;

@Service
@Transactional
public class SuggestionsServiceImpl implements SuggestionsService {
	@Autowired
	private UserDetailsDao userDetailsDao;
	
	@Autowired
	private UserbdDao userbdDao;
	
	@Autowired
	private UserpredDao userpredDao;
	
	@Autowired
	private UserrdDao userrdDao;
	
	@Autowired
	private UserprodDao userprodDao;
	
	@Override
	public List<CardsListDto> suggestByAge(Long id) {
		// TODO Auto-generated method stub
		AgeDto ages = userpredDao.getPrefAgeById(id);
		
		List<Long> ids = userbdDao.getUserIdsByAge(ages.getMinAge(), ages.getMaxAge());
		
		boolean gender = getGender(id);
		
		List<CardsListDto> suggestionCardsByAge = getCards(ids, gender);
		return suggestionCardsByAge;
	}
	
	@Override
	public List<CardsListDto> suggestByReligion(Long id) {
		// TODO Auto-generated method stub
		Religion prefReligion = userpredDao.getPrefReligionById(id);
		List<Long> ids = userrdDao.getUserIdsByReligion(prefReligion);
		boolean gender = getGender(id);
		List<CardsListDto> suggestionCardsByReligion = getCards(ids, gender);
		return suggestionCardsByReligion;
	}


	@Override
	public List<CardsListDto> suggestByEducation(Long id) {
		// TODO Auto-generated method stub
		Education education = userpredDao.getPrefEducationById(id);
		List<Long> ids = userprodDao.getUserIdsByEducation(education);
		boolean gender = getGender(id);
		List<CardsListDto> suggestionCardsByEducation = getCards(ids, gender);
		return suggestionCardsByEducation;
	}
	
	private boolean getGender(Long id) {
		boolean gender;
		gender = userDetailsDao.findGender(id);
		return gender;
	}
	
	private List<CardsListDto> getCards(List<Long> ids, boolean gender){
		List<CardsListDto> cards = userDetailsDao.getCardsByIds(ids, gender);
		return cards;
	}

}
