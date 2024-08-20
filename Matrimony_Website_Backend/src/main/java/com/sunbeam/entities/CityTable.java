package com.sunbeam.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@Entity
@Table(name="Cities")
public class CityTable extends HelperTable_BaseEntity {

	
	public CityTable(City city) {
		// TODO Auto-generated constructor stub
		this.city = city;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private City city;
}
