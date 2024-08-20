package com.sunbeam.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Castes")
@NoArgsConstructor
@Getter
public class Caste extends HelperTable_BaseEntity {

	
	public Caste(Castes caste) {
		// TODO Auto-generated constructor stub
		this.caste = caste;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private Castes caste;
	
	 public void setCaste(Castes caste) {
	        this.caste = caste;
	    }
}
