package com.azul.coredomain.meta.model;

import lombok.*;

import java.util.Date;
import java.util.List;

@Getter @Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Car {

    private Date dateAdded;

    private Price price;
    private String manufacturer;
    private String model;
    private String structure;
    private Date year;
    private String color;
    private List<Number> mileage;
    private String transmission;
    private String fuel;
    private String plateRegistration;
    private String city;
}
