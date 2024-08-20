package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Castes;

public interface CasteDao extends JpaRepository<Caste,Long> {
	@Query("SELECT CASE WHEN COUNT(c) > 0 THEN TRUE ELSE FALSE END FROM Caste c WHERE c.caste = :caste")
	boolean existsByCaste(@Param("caste") Castes caste);
	
	@Query("SELECT c FROM Caste c WHERE c.caste = :name")
	Caste findByName(@Param("name") Castes caste);
}
