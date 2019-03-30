package com.azul.coredomain.meta.exceptions;



@SuppressWarnings("serial")
public class NotFoundException extends RuntimeException {
    public NotFoundException(String type, String identifier) {
        super("could not find " + type + " with id: " + identifier + "'.");
    }
}
