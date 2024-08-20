package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Religion;
import com.sunbeam.entities.User_Religion_Details;

public interface UserrdDao extends JpaRepository<User_Religion_Details, Long> {
	@Query("SELECT u.id FROM User_Religion_Details u WHERE u.religion = :religion")
	List<Long> getUserIdsByReligion(@Param("religion") Religion religion);
	
	
}
