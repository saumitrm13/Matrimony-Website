package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserbdDto;
import com.sunbeam.entities.User_basic_details;

public interface UserbdService {
	ApiResponse saveUserbd(UserbdDto userbd);
}
