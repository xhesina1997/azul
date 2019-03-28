package com.azul.coredomain.meta.Extendables;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class BaseModel {
    @Id private String id;
    @CreatedDate private long created;
    @LastModifiedDate private long updated;
}
