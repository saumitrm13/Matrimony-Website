package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.User_Lifestyle_Details;

public interface UserldDao extends JpaRepository<User_Lifestyle_Details, Long> {

}
