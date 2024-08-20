package com.sunbeam.entities;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user_details")
public class User_Details extends BaseEntity {
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
	
	@ManyToOne (fetch = FetchType.EAGER)// mandatory
	@JoinColumn(name = "mother_tongue_id", nullable = false)
	private MotherTongue motherTongue;
	
	@Column(name="height")
	private int height;
	
	@Column(name="weight")
	private int weight;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "nationality_id", nullable=false)
	private Nationality nationality;
	
	@Column(name="disability")
	private boolean isDisabled;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "marital_status_id", nullable=false)
	private Marital_Status maritalStatus;
	
	@ManyToOne (fetch = FetchType.EAGER)// mandatory
	@JoinColumn(name = "religion_id", nullable = false)
	private Religion religion;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "caste_id",nullable = false)
	private Caste caste;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="zodiac_sign_id", nullable = false)
	private ZodiacSignTable zodiacSign;
	
	@Column(name="fatherName",length=30)
	private String fatherName;
	
	@Column(name="motherName",length=30)
	private String motherrName;
	
	@Column(name="siblings")
	private int totalSiblings;
	
	@Column(name="familyIncome")
	private long familyIncome;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="city_id",nullable=false)
	private CityTable city;
	
	@Column(name="pincode")
	private long pincode;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="degree_id",nullable=false)
	private Education education;
	
	@Column(name="univaersity_name",length=30)
	private String universityName;
	
	@Column(name="company_name",length=30)
	private String companyName;
	
	@Column(name="annual_income")
	private long annualIncome;
	
	@Column(name="time_of_birth", length=25)
	private String time;
	
	@Column(name="place_of_birth",length=20)
	private String placeOfBirth;
	
	@Column(name="isVegeterian")
	private boolean isVegeterain;
	
	@Column(name="isSmoker")
	private boolean isSmoker;
	
	@Column(name="isDrinker")
	private boolean isDrinker;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="pref_marital_status_id",nullable=false)
	private Marital_Status pref_maritalStatus;
	
	@Column(name="pref_vegeterian")
	private boolean isVegeterainPreffered;
	
	@Column(name="pref_smoker")
	private boolean isSmokingPreffered;
	
	@Column(name="pref_drinker")
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
	
	@ManyToOne (fetch = FetchType.EAGER)// mandatory
	@JoinColumn(name = "pref_religion_id", nullable = false)
	private Religion preferredReligion;
	
	@Column(name="pref_income")
	private long preferredIncome;
}
