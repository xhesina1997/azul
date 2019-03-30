package com.azul.metadataservice.dao;

import com.azul.coredomain.meta.model.Phone;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhoneRepository extends MongoRepository<Phone, String> {
    Phone findFirstById(String id);
}
