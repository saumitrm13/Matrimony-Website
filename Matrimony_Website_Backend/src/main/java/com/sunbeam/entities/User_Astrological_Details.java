package com.sunbeam.entities;

import java.sql.Time;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="user_astrological_details")
public class User_Astrological_Details extends BaseEntity {
	@Column(name="time_of_birth", length=25)
	private String time;
	
	@Column(name="place_of_birth",length=20)
	private String placeOfBirth;
}
