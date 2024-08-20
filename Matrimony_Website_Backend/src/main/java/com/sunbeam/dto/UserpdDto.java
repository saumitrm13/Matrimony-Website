package com.sunbeam.dto;

import com.sunbeam.entities.Marital_Status;
import com.sunbeam.entities.MotherTongue;
import com.sunbeam.entities.Nationality;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserpdDto {
	public UserpdDto(MotherTongue motherTongue, int height, int weight, Nationality nationality, boolean isDisabled,
			Marital_Status maritalStatus) {
		super();
		this.motherTongue = motherTongue;
		this.height = height;
		this.weight = weight;
		this.nationality = nationality;
		this.isDisabled = isDisabled;
		this.maritalStatus = maritalStatus;
	}
	private MotherTongue motherTongue;
	private int height;
	private int weight;
	private Nationality nationality;
	private boolean isDisabled;
	private Marital_Status maritalStatus;
}
