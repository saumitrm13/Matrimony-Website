package com.sunbeam.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserbdDto extends BaseDto {
	private String fullName;
	private String email;
	private LocalDate dob;
	private boolean gender;
	private String password;
	private int age;
	
}
