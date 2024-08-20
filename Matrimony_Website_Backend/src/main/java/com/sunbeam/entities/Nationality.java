package com.sunbeam.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name="nationalities")
public class Nationality extends HelperTable_BaseEntity {

	public Nationality(Nationalities nationality) {
		// TODO Auto-generated constructor stub
		this.nationality = nationality;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=50)
	private Nationalities nationality;
}