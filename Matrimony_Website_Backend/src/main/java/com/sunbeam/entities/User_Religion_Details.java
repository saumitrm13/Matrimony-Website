package com.sunbeam.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name="user_religion_details")
@Getter
@Setter
public class User_Religion_Details extends BaseEntity{
	@ManyToOne (fetch = FetchType.EAGER)// mandatory
	@JoinColumn(name = "religion_id", nullable = false)
	private Religion religion;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "caste_id",nullable = false)
	private Caste caste;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="zodiac_sign_id", nullable = false)
	private ZodiacSignTable zodiacSign;
	
}