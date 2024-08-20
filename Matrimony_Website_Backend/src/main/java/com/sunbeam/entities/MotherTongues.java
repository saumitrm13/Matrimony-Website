package com.sunbeam.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum MotherTongues {
    ASSAMESE("Assamese"),
    BENGALI("Bengali"),
    BODO("Bodo"),
    DOGRI("Dogri"),
    ENGLISH("English"),
    GUJARATI("Gujarati"),
    HINDI("Hindi"),
    KANNADA("Kannada"),
    KASHMIRI("Kashmiri"),
    KONKANI("Konkani"),
    MAITHILI("Maithili"),
    MALAYALAM("Malayalam"),
    MANIPURI("Manipuri"),
    MARATHI("Marathi"),
    NEPALI("Nepali"),
    ODIA("Odia"),
    PUNJABI("Punjabi"),
    SANSKRIT("Sanskrit"),
    SANTALI("Santali"),
    SINDHI("Sindhi"),
    TAMIL("Tamil"),
    TELUGU("Telugu"),
    URDU("Urdu");

    private final String value;

    MotherTongues(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static MotherTongues fromValue(String value) {
        for (MotherTongues tongue : values()) {
            if (tongue.value.equalsIgnoreCase(value)) {
                return tongue;
            }
        }
        throw new IllegalArgumentException("Unknown value: " + value);
    }
}
