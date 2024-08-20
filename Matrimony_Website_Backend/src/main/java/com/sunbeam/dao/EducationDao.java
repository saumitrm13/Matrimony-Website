package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Castes;
import com.sunbeam.entities.Degree;
import com.sunbeam.entities.Education;

public interface EducationDao extends JpaRepository<Education, Long>{
	@Query("SELECT CASE WHEN COUNT(e) > 0 THEN TRUE ELSE FALSE END FROM Education e WHERE e.degree = :degree")
	boolean existsByDegree(@Param("degree") Degree degree);
	
	@Query("SELECT e FROM Education e WHERE e.degree = :name")
	Education findByName(@Param("name") Degree degree);
}
