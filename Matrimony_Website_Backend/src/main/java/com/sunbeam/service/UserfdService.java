package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.UserfdDto;

public interface UserfdService {
	ApiResponse saveUserfd(UserfdDto userfd);
}
