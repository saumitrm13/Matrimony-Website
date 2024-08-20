package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.Religions;

public interface ReligionDao extends JpaRepository<Religion, Long> {
	@Query("SELECT CASE WHEN COUNT(r) > 0 THEN TRUE ELSE FALSE END FROM Religion r WHERE r.religion = :religion")
	boolean existsByReligion(@Param("religion") Religions religion);
	
	@Query("SELECT r FROM Religion r WHERE r.religion = :name")
	Religion findByName(@Param("name") Religions religion);
}
