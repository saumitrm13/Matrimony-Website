package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserDetailsDto;

public interface UserDetailsService {
	ApiResponse saveUserDetails(UserDetailsDto userDto);
}
