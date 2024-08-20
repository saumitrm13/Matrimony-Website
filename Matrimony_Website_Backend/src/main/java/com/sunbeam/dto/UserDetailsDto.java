package com.sunbeam.dto;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.CityTable;
import com.sunbeam.entities.Education;
import com.sunbeam.entities.Marital_Status;
import com.sunbeam.entities.MotherTongue;
import com.sunbeam.entities.Nationality;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.ZodiacSignTable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsDto extends BaseDto {
    private String fullName;
    private String email;
    private LocalDate dob;
    private boolean gender;
    private String password;
    private int age;
    private MotherTongue motherTongue;
    private int height;
    private int weight;
    private Nationality nationality;
    private boolean isDisabled;
    private Marital_Status maritalStatus;
    private Religion religion;
    private Caste caste;
    private ZodiacSignTable zodiacSign;
    private String fatherName;
    private String motherrName;
    private int totalSiblings;
    private long familyIncome;
    private CityTable city;
    private long pincode;
    private Education education;
    private String universityName;
    private String companyName;
    private long annualIncome;
    private String time;
    private String placeOfBirth;
    private boolean isVegeterain;
    private boolean isSmoker;
    private boolean isDrinker;
    private Marital_Status pref_maritalStatus;
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
