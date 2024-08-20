package com.sunbeam.dto;

import com.sunbeam.entities.Caste;
import com.sunbeam.entities.Religion;
import com.sunbeam.entities.ZodiacSignTable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class UserrdDto extends BaseDto {
	private Religion religion;
	private Caste caste;
	private ZodiacSignTable zodiacSign;
	public Religion getReligion() {
		return religion;
	}
	public void setReligion(Religion religion) {
		this.religion = religion;
	}
	public Caste getCaste() {
		return caste;
	}
	public void setCaste(Caste caste) {
		this.caste = caste;
	}
	public ZodiacSignTable getZodiacSign() {
		return zodiacSign;
	}
	public void setZodiacSign(ZodiacSignTable zodiacSign) {
		this.zodiacSign = zodiacSign;
	}
	@Override
	public String toString() {
		return "UserrdDto [religion=" + religion + ", caste=" + caste + ", zodiacSign=" + zodiacSign + "]";
	}
}
