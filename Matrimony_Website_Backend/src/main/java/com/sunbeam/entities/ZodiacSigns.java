package com.sunbeam.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum ZodiacSigns {
    ARIES("Aries"),
    TAURUS("Taurus"),
    GEMINI("Gemini"),
    CANCER("Cancer"),
    LEO("Leo"),
    VIRGO("Virgo"),
    LIBRA("Libra"),
    SCORPIO("Scorpio"),
    SAGITTARIUS("Sagittarius"),
    CAPRICORN("Capricorn"),
    AQUARIUS("Aquarius"),
    PISCES("Pisces");

    private final String value;

    ZodiacSigns(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static ZodiacSigns fromValue(String value) {
        for (ZodiacSigns sign : values()) {
            if (sign.value.equalsIgnoreCase(value)) {
                return sign;
            }
        }
        throw new IllegalArgumentException("Unknown value: " + value);
    }
}
