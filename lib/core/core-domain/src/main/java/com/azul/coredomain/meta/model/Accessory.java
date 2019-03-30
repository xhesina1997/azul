package com.azul.coredomain.meta.model;

import com.azul.coredomain.meta.extendable.BaseModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Accessory extends BaseModel {

    private AccessoryTypes type;

    private String quantity; // number of said accessories.

    private ChargerCondition chargerCondition; // Determine charger condition.

    public enum ChargerCondition {  // Maybe separate class, with brand, voltage, original charger of the device, etc?
                                    // We can use it later if people want to post chargers for sale?
        FULL_CHARGER, BRICK_ONLY, CABLE_ONLY;
    }

    public enum AccessoryTypes {
        CHARGER, SCREEN_PROTECTOR, CASE;
    }
}
