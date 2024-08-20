package com.sunbeam.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Religions {
    HINDU("Hindu"),
    MUSLIM("Muslim"),
    SIKH("Sikh"),
    CHRISTIAN("Christian"),
    JAIN("Jain"),
    JUDAISM("Judaism"),
    BUDDHISM("Buddhism");

    private final String value;

    Religions(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static Religions fromValue(String value) {
        for (Religions religion : values()) {
            if (religion.value.equalsIgnoreCase(value)) {
                return religion;
            }
        }
        throw new IllegalArgumentException("Unknown value: " + value);
    }
}
