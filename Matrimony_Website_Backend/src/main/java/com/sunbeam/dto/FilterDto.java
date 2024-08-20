package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FilterDto {
	private Long id;
	private Integer maxAge;
    private Integer minAge;
    private Integer height;
    private String education;
    private Boolean nonDrinker;
    private Boolean nonSmoker;
    private Boolean vegetarian;
    private Boolean otherReligions;
    private Boolean otherCastes;
}
