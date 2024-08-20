package com.sunbeam.dto;

import java.util.List;

import com.sunbeam.entities.User_basic_details;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InterestsDto extends BaseDto {
	private User_basic_details shownByUser;
	private List<User_basic_details> shownInUsers;
}
