package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.User_Personal_Details;

public interface UserpdDao extends JpaRepository<User_Personal_Details, Long> {

}
