package com.sunbeam.dto;

import com.sunbeam.entities.Education;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserprodDto {
	private Education education;
	private String universityName;
	private String companyName;
	private long annualIncome;
}
