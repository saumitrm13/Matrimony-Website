package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Education;
import com.sunbeam.entities.User_Professional_Details;

public interface UserprodDao extends JpaRepository<User_Professional_Details, Long>{
	@Query("SELECT u.id FROM User_Professional_Details u WHERE u.education = :education")
	List<Long> getUserIdsByEducation(@Param("education") Education education);
}
