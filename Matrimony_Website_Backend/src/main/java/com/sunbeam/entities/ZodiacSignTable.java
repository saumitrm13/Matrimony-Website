package com.sunbeam.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="zodiac_signs")
@NoArgsConstructor
@Getter
public class ZodiacSignTable extends HelperTable_BaseEntity {

	
	public ZodiacSignTable(ZodiacSigns zodiacSigns) {
		// TODO Auto-generated constructor stub
		this.zoidac_sign = zodiacSigns;
	}

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private ZodiacSigns zoidac_sign;
	
	 public void setZodiacSign(ZodiacSigns sign) {
	        this.zoidac_sign = sign;
	    }
}