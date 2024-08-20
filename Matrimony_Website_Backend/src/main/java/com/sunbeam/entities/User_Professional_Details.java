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
@Table(name="user_professional_details")
public class User_Professional_Details extends BaseEntity {
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="degree_id",nullable=false)
	private Education education;
	
	@Column(name="univaersity_name",length=30)
	private String universityName;
	
	@Column(name="company_name",length=30)
	private String companyName;
	
	@Column(name="annual_income")
	private long annualIncome;
	
}
