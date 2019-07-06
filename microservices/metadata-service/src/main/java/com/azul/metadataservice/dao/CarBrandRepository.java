package com.azul.metadataservice.dao;

import com.azul.coredomain.meta.model.CarBrand;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CarBrandRepository extends MongoRepository<CarBrand, String> {
    CarBrand findFirstById(String id);
}
