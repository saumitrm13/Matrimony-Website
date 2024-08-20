package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Castes;
import com.sunbeam.entities.Nationalities;
import com.sunbeam.entities.Nationality;

public interface NationalitiesDao extends JpaRepository<Nationality,Long> {
	@Query("SELECT CASE WHEN COUNT(n) > 0 THEN TRUE ELSE FALSE END FROM Nationality n WHERE n.nationality = :nationality")
	boolean existsByNationality(@Param("nationality") Nationalities nationality);
	
	@Query("SELECT n FROM Nationality n WHERE n.nationality = :name")
	Nationality findByName(@Param("name") Nationalities nationality);
}
