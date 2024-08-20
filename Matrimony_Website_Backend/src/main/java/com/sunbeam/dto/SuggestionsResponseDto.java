package com.sunbeam.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SuggestionsResponseDto {
    private List<CardsListDto> suggestionCardsByAge;
    private List<CardsListDto> suggestionCardsByEducation;
    private List<CardsListDto> suggestionCardsByReligion;
}