package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Castes;
import com.sunbeam.entities.MotherTongue;
import com.sunbeam.entities.MotherTongues;

public interface MotherTongueDao extends JpaRepository<MotherTongue, Long>{
	@Query("SELECT CASE WHEN COUNT(m) > 0 THEN TRUE ELSE FALSE END FROM MotherTongue m WHERE m.motherTongue = :motherTongue")
	boolean existsByMotherTongue(@Param("motherTongue") MotherTongues motherTongue);
	
	@Query("SELECT m FROM MotherTongue m WHERE m.motherTongue = :name")
	MotherTongue findByName(@Param("name") MotherTongues motherTongue);
}
