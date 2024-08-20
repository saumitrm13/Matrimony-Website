package com.sunbeam.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name="user_basic_details")

public class User_basic_details extends BaseEntity{
	@Column(name="fullName",length=20)
	private String fullName;
	
	@Column(name="email",length=20)
	private String email;
	
	@Column(name="dateOfBirth")
	private LocalDate dob;
	
	@Column(name="gender")
	private boolean gender;
	
	@Column(name="password", length=200)
	private String password;
	
	@Column(name="age")
	private int age;

	
}
