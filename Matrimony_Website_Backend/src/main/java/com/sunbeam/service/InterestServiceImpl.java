package com.sunbeam.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.InterestsDao;
import com.sunbeam.dao.UserbdDao;
import com.sunbeam.dto.CardsListDto;
import com.sunbeam.dto.InterestsDto;
import com.sunbeam.entities.Interests;
import com.sunbeam.entities.User_basic_details;

@Service
@Transactional
public class InterestServiceImpl implements InterestService{
	
	@Autowired
	private UserbdDao userbdDao;
	
	@Autowired
	private InterestsDao interestsDao;
	
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public void showInterest(Long shownById, Long shownInId) {
		// TODO Auto-generated method stub
		
		User_basic_details shownByUser = userbdDao.getById(shownById);
		User_basic_details shownInUser = userbdDao.getById(shownInId);
		
		Interests interest = interestsDao.findByShownByUser(shownByUser);
		
		if(interest == null) {
			interest = new Interests();
			interest.setShownByUser(shownByUser);
			interest.setShownInUsers(new ArrayList<User_basic_details>());
			System.out.println("Interest ser 1 :"+ interest.getShownInUsers() );
		}
		
		List<User_basic_details> shownInUsers = interest.getShownInUsers();
		if(shownInUsers == null) {
			shownInUsers = new ArrayList<User_basic_details>();
			System.out.println("Interest ser 2 :"+ interest.getShownInUsers() );
		}
		if(!(shownInUsers.contains(shownInUser))) {
			shownInUsers.add(shownInUser);
			interest.setShownInUsers(shownInUsers);
			System.out.println("Interest ser 3 :"+ interest.getShownInUsers() );
		}
		System.out.println("Interest ser 4 :"+ interest.getShownInUsers() );
		
		interestsDao.save(interest);
	}
	@Override
	public List<Long> getInterestsCounts(Long userId) {
		// TODO Auto-generated method stub
		
		Long interestedInCount = interestsDao.getInterestedInList(userId);
		Long interestsShownByCount = interestsDao.getInterestsShownByList(userId);
		List<Long> interestsCount = new ArrayList<Long>();
		interestsCount.add(interestedInCount);
		interestsCount.add(interestsShownByCount);
		return interestsCount;
	}
	@Override
	public List<CardsListDto> getInterestedInNames(Long userId) {
		// TODO Auto-generated method stub
		List<CardsListDto> interestedInNames = interestsDao.getInterestedInListWithNames(userId);
		
		return interestedInNames;
	}
	@Override
	public List<CardsListDto> getInterestsShownByNames(Long userId) {
		// TODO Auto-generated method stub
		List<CardsListDto> interestsShownByNames = interestsDao.getInterestsShownByListWithNames(userId);
		return interestsShownByNames;
	}

}
