package com.eureka.zuul.repository.metadata;

import com.azul.coredomain.meta.model.CarModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CarModelRepository extends MongoRepository<CarModel, String> {
    CarModel findFirstById(String id);

}