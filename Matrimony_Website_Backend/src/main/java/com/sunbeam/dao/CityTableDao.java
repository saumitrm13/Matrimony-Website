package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Castes;
import com.sunbeam.entities.City;
import com.sunbeam.entities.CityTable;

public interface CityTableDao extends JpaRepository<CityTable, Long> {
	@Query("SELECT CASE WHEN COUNT(c) > 0 THEN TRUE ELSE FALSE END FROM CityTable c WHERE c.city = :city")
	boolean existsByCity(@Param("city") City city);
	
	@Query("SELECT c FROM CityTable c WHERE c.city = :name")
	CityTable findByName(@Param("name") City city);
}
