package com.azul.coredomain.meta.exceptions;


@SuppressWarnings("serial")
public class ServiceException extends RuntimeException {

    public ServiceException(Exception excep) {
        super("Service issue: " + excep.getMessage());
        addSuppressed(excep);
    }
    public ServiceException(String excep) {
        super("Service issue: " + excep);
    }
}
