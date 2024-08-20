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
@Table(name="user_residence_details")
public class User_Residence_Details extends BaseEntity {
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="city_id",nullable=false)
	private CityTable city;
	
	@Column(name="pincode")
	private long pincode;
}
