package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.dto.CardsListDto;
import com.sunbeam.dto.InterestsDto;
import com.sunbeam.entities.Interests;
import com.sunbeam.entities.User_basic_details;

public interface InterestsDao extends JpaRepository<Interests, Long>{
	@Query("SELECT i FROM Interests i WHERE i.shownByUser = :shownByUser")
	Interests findByShownByUser(@Param("shownByUser")User_basic_details shownByUser);
	
	@Query("SELECT COUNT(i) FROM Interests i JOIN i.shownInUsers u WHERE i.shownByUser.id = :userId")
	Long getInterestedInList(@Param("userId") Long userId);
	
	@Query("SELECT COUNT(i) FROM Interests i JOIN i.shownInUsers u WHERE u.id = :userId")
	Long getInterestsShownByList(@Param("userId") Long userId);
	
	@Query("SELECT new com.sunbeam.dto.CardsListDto (u.id,u.fullName,u.age) FROM "
			+ "Interests i JOIN i.shownInUsers u WHERE i.shownByUser.id = :userId")
	List<CardsListDto> getInterestedInListWithNames(@Param("userId") Long userId);
	
	@Query("SELECT new com.sunbeam.dto.CardsListDto(i.shownByUser.id, i.shownByUser.fullName, i.shownByUser.age) FROM "
		       + "Interests i JOIN i.shownInUsers u WHERE u.id = :userId")
		List<CardsListDto> getInterestsShownByListWithNames(@Param("userId") Long userId);

	
}
