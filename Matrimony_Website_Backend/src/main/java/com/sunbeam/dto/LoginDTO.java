package com.sunbeam.dto;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class LoginDTO {
	@NotNull
	private String email;
	@NotNull
	private String password;
}
