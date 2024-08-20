package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.dto.CardsListDto;
import com.sunbeam.dto.UserLoggedInDto;
import com.sunbeam.entities.User_basic_details;

public interface UserbdDao extends JpaRepository<User_basic_details, Long> {
	@Query("SELECT CASE WHEN COUNT(u)>0 THEN TRUE ELSE FALSE END FROM User_basic_details u WHERE "
			+ "u.email = :email")
	boolean existsByEmail(@Param("email") String email);
	
	@Query("SELECT u.id FROM User_basic_details u WHERE (u.age BETWEEN :minAge AND :maxAge) OR u.age IS NULL")
	List<Long> getUserIdsByAge(@Param("minAge") Integer minAge, @Param("maxAge") Integer maxAge);
	
	@Query("SELECT new com.sunbeam.dto.UserLoggedInDto(u.id, u.fullName, u.email, u.dob, u.gender, u.password, u.age) FROM User_basic_details u WHERE u.email = :email AND u.password = :password")
	public Optional<UserLoggedInDto> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
	
	@Query("SELECT new com.sunbeam.dto.CardsListDto(u.id, u.fullName, u.age) FROM User_basic_details u WHERE u.fullName LIKE CONCAT(('%'), :searchString, ('%')) AND u.id != :id")
	List<CardsListDto> searchByName(@Param("id") Long id,@Param("searchString") String searchString);

} 
 