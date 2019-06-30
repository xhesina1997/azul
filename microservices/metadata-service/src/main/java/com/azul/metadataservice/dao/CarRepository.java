package com.azul.metadataservice.dao;

import com.azul.coredomain.meta.model.Car;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CarRepository extends MongoRepository<Car, String> {

}
