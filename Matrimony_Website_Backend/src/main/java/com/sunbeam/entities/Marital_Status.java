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
@Table(name="marital_status")
public class Marital_Status extends HelperTable_BaseEntity {
	public Marital_Status(MaritalStatus maritalstatus) {
		// TODO Auto-generated constructor stub
		this.maritalstatus = maritalstatus;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private MaritalStatus maritalstatus;
}
