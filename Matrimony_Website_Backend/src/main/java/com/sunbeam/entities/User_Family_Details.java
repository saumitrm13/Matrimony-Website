package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_family_details")
public class User_Family_Details extends BaseEntity {
	@Column(name="fatherName",length=30)
	private String fatherName;
	
	@Column(name="motherName",length=30)
	private String motherrName;
	
	@Column(name="siblings")
	private int totalSiblings;
	
	@Column(name="familyIncome")
	private long familyIncome;
}
