package com.sunbeam.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Edit_user_basic_Details_DTO {
    private String fullName;
    private LocalDate dob;
    private boolean gender;
    private int age;
    
    public void setGender(boolean gender) {
    	this.gender = gender;
    }
    
	public boolean getGender() {
		// TODO Auto-generated method stub
		return gender;
	}

    // Getters and Setters
   
}
