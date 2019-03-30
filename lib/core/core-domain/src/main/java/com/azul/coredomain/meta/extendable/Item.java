package com.azul.coredomain.meta.extendable;

import com.azul.coredomain.meta.model.Price;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item extends BaseModel {

    private String title;

    private String description;

    private String transactionType; // IE for sale or for rent or swap?

    private Price price;

    private List<String> images;

    private Condition condition;

    private String color; // TODO: Enum? There are colors like Space Gray, Midnight Black etc... maybe we get them with the phone data we get online?

    public enum Condition {
        NEW, USED, REFURBISHED;
    }
}
