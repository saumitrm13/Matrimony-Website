package com.sunbeam.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Degree {
    BSC("B.Sc"),
    MSC("M.Sc"),
    BE("B.E"),
    BTECH("B.Tech"),
    PHD("Ph.D"),
    ME("M.E"),
    MTECH("M.Tech"),
    BCOM("B.Com"),
    MBBS("MBBS"),
    BAMS("BAMS"),
    BHMS("BHMS"),
    MD("M.D"),
    MCOM("M.Com"),
    MBA("MBA"),
    BBA("BBA"),
    DIPLOMA("Diploma"),
    BA("B.A"),
    MA("M.A"),
    TENTH("10th"),
    TWELTH("12th"),
    OTHER("Other");

    private final String value;

    Degree(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static Degree fromValue(String value) {
        for (Degree degree : values()) {
            if (degree.value.equalsIgnoreCase(value)) {
                return degree;
            }
        }
        throw new IllegalArgumentException("Unknown value: " + value);
    }
}
