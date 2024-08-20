package com.sunbeam.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@NoArgsConstructor
@Table(name="mother_tongue")
public class MotherTongue extends HelperTable_BaseEntity {

	
	public MotherTongue(MotherTongues motherTongue) {
		// TODO Auto-generated constructor stub
		this.motherTongue = motherTongue;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private MotherTongues motherTongue;
}