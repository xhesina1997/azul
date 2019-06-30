package com.azul.coredomain.meta.model;

import lombok.*;

@Getter @Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Price {

    private float value;

    private String currency; //TODO: enum
}
