package com.sunbeam.dto;

import com.sunbeam.entities.CityTable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserredDto {
	private CityTable city;
	private long pincode;
}
