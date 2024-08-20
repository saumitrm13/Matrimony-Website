package com.sunbeam.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum Castes {
    BRAHMIN("Brahmin"),
    KSHATRIYA("Kshatriya"),
    YADAV("Yadav"),
    BHUMIHAAR("Bhumihar"),
    GUJJAR("Gujjar"),
    MARATHA("Maratha"),
    KUMBHAR("Kumbhar"),
    CHAMBHAR("Chambhar"),
    JAT("Jat"),
    LOHAR("Lohar"),
    KURMI("Kurmi"),
    TELI("Teli"),
    QUERESHI("Qureshi"),
    KHAN("Khan"),
    PATHAN("Pathan");

    private final String value;

    Castes(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static Castes fromValue(String value) {
        for (Castes caste : values()) {
            if (caste.value.equalsIgnoreCase(value)) {
                return caste;
            }
        }
        throw new IllegalArgumentException("Unknown value: " + value);
    }
}
