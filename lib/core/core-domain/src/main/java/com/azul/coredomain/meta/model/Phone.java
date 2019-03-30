package com.azul.coredomain.meta.model;

import com.azul.coredomain.meta.extendable.Item;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Phone extends Item {
    private String type; // Phone or tablet?

    private String brand; // Samsung, Apple, etc...

    private String model; // Device model: iPhone, Galaxy S10, etc...

    private String storage; // 64 GB, etc...

    private String osVersion; // Optional? iOS 11.x/Android Pie X.x

    private FactoryState factoryState; // Whether the device is factory locked or unlocked.

    private Integer simSlots; // 1 or 2 sim card slots.

    private List<Accessory> accessories;

    public enum FactoryState {
        LOCKED, UNLOCKED;
    }
}
