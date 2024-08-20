package com.sunbeam.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum MaritalStatus {
    AWAITING_DIVORCE("Awaiting Divorce"),
    UNMARRIED("Unmarried"),
    DIVORCED("Divorced"),
    WIDOWED("Widowed");

    private final String value;

    MaritalStatus(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static MaritalStatus fromValue(String value) {
        for (MaritalStatus status : values()) {
            if (status.value.equalsIgnoreCase(value)) {
                return status;
            }
        }
        throw new IllegalArgumentException("Unknown value: " + value);
    }
}
