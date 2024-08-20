package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.User_Family_Details;

public interface UserfdDao extends JpaRepository<User_Family_Details, Long> {

}
