package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.ZodiacSignTable;
import com.sunbeam.entities.ZodiacSigns;



public interface ZodiacSignTableDao extends JpaRepository<ZodiacSignTable, Long>{
	@Query("SELECT CASE WHEN COUNT(z) > 0 THEN TRUE ELSE FALSE END FROM ZodiacSignTable z WHERE z.zoidac_sign = :zoidac_sign")
	boolean existsByZodiacSign(@Param("zoidac_sign") ZodiacSigns zoidac_sign);
	
	@Query("SELECT z FROM ZodiacSignTable z WHERE z.zoidac_sign = :name")
	ZodiacSignTable findByName(@Param("name") ZodiacSigns sign);
}
