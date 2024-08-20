package com.sunbeam.dto;

import com.sunbeam.entities.CityTable;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Marital_Status;
import com.sunbeam.entities.Religion;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserpredDto {
	private Marital_Status maritalStatus;
	private boolean isVegeterainPreffered;
	private boolean isSmokingPreffered;
	private boolean isDrinkingPreffered;
	private int minAge;
	private int maxAge;
	private Education preferredEducation;
	private CityTable preferredCity;
	private Religion preferredReligion;
	private long preferredIncome;
}
