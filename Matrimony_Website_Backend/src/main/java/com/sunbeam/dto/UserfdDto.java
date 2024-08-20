package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserfdDto {
	
	private String fatherName;
	private String motherrName;
	private int totalSiblings;
	private long familyIncome;
}
