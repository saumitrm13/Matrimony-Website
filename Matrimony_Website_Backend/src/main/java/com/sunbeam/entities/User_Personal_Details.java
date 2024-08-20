package com.sunbeam.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
@Entity
@Data
@Table(name="user_personal_details")
public class User_Personal_Details extends BaseEntity{
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
}
