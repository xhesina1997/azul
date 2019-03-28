package com.azul.coredomain.meta.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Price {
    private float value;
    private String currency; //TODO: enum
}
