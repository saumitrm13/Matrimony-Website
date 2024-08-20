package com.sunbeam.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDetailsDao;
import com.sunbeam.dto.CardsListDto;
import com.sunbeam.dto.FilterDto;
import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Religion;

@Service
@Transactional
public class FilterServiceImpl implements FilterService{
	
	@Autowired
	private UserDetailsDao userDetailsDao;
	@Override
	public List<CardsListDto> getFilterResults(FilterDto filterDto) {
		// TODO Auto-generated method stub
		Religion religion = null;
		Caste caste = null;
		Education education = null;
		
		boolean gender = userDetailsDao.findGender(filterDto.getId());
		System.out.println("Gender  :  "+gender);
		if(!filterDto.getOtherReligions()) {
			religion = userDetailsDao.findReligion(filterDto.getId());
			System.out.println(religion.toString());
		}
		if(!filterDto.getOtherCastes()) {
			caste = userDetailsDao.findCaste(filterDto.getId());
			System.out.println(caste.toString());
		}
		if(filterDto.getEducation() != null) {
			education = userDetailsDao.findEducation(filterDto.getId());
			System.out.println(education.toString());
		}
		
		List<CardsListDto> cards = userDetailsDao.applyFilters(filterDto.getMinAge(), filterDto.getMaxAge(), filterDto.getHeight(),
				religion, caste, education, filterDto.getVegetarian(), 
				filterDto.getNonSmoker(), filterDto.getNonDrinker(), gender);
		return cards;
	}

}
