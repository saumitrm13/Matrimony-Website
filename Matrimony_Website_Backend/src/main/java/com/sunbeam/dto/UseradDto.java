package com.sunbeam.dto;

import java.sql.Time;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UseradDto extends BaseDto{
	private String time;
	private String placeOfBirth;
}
