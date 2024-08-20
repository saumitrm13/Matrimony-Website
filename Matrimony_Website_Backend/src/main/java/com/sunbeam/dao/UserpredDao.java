package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.dto.AgeDto;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.User_Preferences_Details;

public interface UserpredDao extends JpaRepository<User_Preferences_Details, Long> {
	@Query("SELECT new com.sunbeam.dto.AgeDto(u.maxAge,u.minAge) FROM User_Preferences_Details u WHERE u.id = :id")
	AgeDto getPrefAgeById(@Param("id") Long id);
	
	@Query("SELECT u.preferredReligion FROM User_Preferences_Details u WHERE u.id = :id")
	Religion getPrefReligionById(@Param("id") Long id);
	
	@Query("SELECT u.preferredEducation FROM User_Preferences_Details u WHERE u.id = :id")
	Education getPrefEducationById(@Param("id") Long id);
}
