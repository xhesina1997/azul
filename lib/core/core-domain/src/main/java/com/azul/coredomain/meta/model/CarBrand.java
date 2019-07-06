package com.azul.coredomain.meta.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document
public class CarBrand {

    private String id;
    private String name;
}
