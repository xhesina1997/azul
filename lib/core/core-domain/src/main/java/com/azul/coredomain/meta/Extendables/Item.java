package com.azul.coredomain.meta.Extendables;

import com.azul.coredomain.meta.Models.Price;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class Item extends BaseModel{
    private String title;
    private String description;
    private String transactionType; // IE for sale or for rent
    private Price price;
    private List<String> images;
}
