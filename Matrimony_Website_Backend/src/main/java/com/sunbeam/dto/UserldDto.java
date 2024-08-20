package com.sunbeam.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserldDto extends BaseDto{
	
	private boolean isVegeterain;
	

	private boolean isSmoker;
	
	
	private boolean isDrinker;
}
