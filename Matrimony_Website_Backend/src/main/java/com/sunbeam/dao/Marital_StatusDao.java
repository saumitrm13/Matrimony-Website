package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Castes;
import com.sunbeam.entities.MaritalStatus;
import com.sunbeam.entities.Marital_Status;

public interface Marital_StatusDao extends JpaRepository<Marital_Status, Long>{
	@Query("SELECT CASE WHEN COUNT(m) > 0 THEN TRUE ELSE FALSE END FROM Marital_Status m WHERE m.maritalstatus = :maritalstatus")
	boolean existsByMaritalStatus(@Param("maritalstatus") MaritalStatus maritalstatus);
	
	@Query("SELECT m FROM Marital_Status m WHERE m.maritalstatus = :name")
	Marital_Status findByName(@Param("name") MaritalStatus maritalstatus);
}
