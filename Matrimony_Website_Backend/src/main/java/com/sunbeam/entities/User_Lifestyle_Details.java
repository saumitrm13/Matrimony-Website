package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="user_lifestyle_details")
public class User_Lifestyle_Details extends BaseEntity{
	@Column(name="isVegeterian")
	private boolean isVegeterain;
	
	@Column(name="isSmoker")
	private boolean isSmoker;
	
	@Column(name="isDrinker")
	private boolean isDrinker;
}
