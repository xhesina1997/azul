package com.azul.coredomain.meta.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Getter @Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Car {

    private Date dateAdded;

    private String title;
    private String description;

    private Price price;
    private String manufacturer;
    private String model;
    private String structure;
    private String year;
    private String color;
    private List<Number> mileage;
    private String transmission;
    private String fuel;
    private String plateRegistration;
    private String city;
}
