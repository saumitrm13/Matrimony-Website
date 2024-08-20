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
@Table(name="Education")
public class Education extends HelperTable_BaseEntity {

	public Education(Degree degree) {
		// TODO Auto-generated constructor stub
		this.degree = degree;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private Degree degree;
	
}
