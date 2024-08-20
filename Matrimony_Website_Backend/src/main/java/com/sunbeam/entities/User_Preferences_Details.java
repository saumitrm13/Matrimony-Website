package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name="user_preferences")
public class User_Preferences_Details extends BaseEntity {
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="marital_status_id",nullable=false)
	private Marital_Status maritalStatus;
	
	@Column(name="vegeterian")
	private boolean isVegeterainPreffered;
	
	@Column(name="smoker")
	private boolean isSmokingPreffered;
	
	@Column(name="drinker")
	private boolean isDrinkingPreffered;
	
	@Column(name="min_age")
	private int minAge;
	
	@Column(name="max_age")
	private int maxAge;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="pref_degree_id",nullable=false)
	private Education preferredEducation; 
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="pref_city_id",nullable=false)
	private CityTable preferredCity;
	
	@ManyToOne (fetch = FetchType.EAGER)
	@JoinColumn(name = "pref_religion_id", nullable = false)
	private Religion preferredReligion;
	
	@Column(name="pref_income")
	private long preferredIncome;
}
