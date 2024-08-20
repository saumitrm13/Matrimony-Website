package com.sunbeam.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseDto {
	private long id;
	private LocalDate createdOn;
	private LocalDate updatedOn;
	
}
