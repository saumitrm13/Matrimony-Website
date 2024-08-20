package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.sunbeam.entities.User_Astrological_Details;


public interface UseradDao extends JpaRepository<User_Astrological_Details, Long> {
	
} 
