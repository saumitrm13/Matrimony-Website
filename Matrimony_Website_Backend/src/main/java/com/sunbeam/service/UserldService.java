package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserldDto;

public interface UserldService {
	ApiResponse saveUserld(UserldDto userld);
}
