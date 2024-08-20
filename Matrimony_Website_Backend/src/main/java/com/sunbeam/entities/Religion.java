package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Religion")
@NoArgsConstructor
@Getter
public class Religion extends HelperTable_BaseEntity {
	
	public Religion(Religions religion) {
		// TODO Auto-generated constructor stub
		this.religion = religion;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private Religions religion;
	
	 public void setReligion(Religions religion) {
	        this.religion = religion;
	    }
}
