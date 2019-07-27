package com.azul.metadataservice.dao;

import com.azul.coredomain.meta.model.Car;
import com.azul.coredomain.meta.model.QCar;
import com.querydsl.core.BooleanBuilder;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

import java.util.Iterator;
import java.util.Optional;

public interface CarRepository extends MongoRepository<Car, String>, QuerydslPredicateExecutor<Car>, QuerydslBinderCustomizer<QCar> {
    Car findFirstByUuid(String uuid);

    @Override
    default void customize(QuerydslBindings bindings, QCar root) {
        bindings.bind(QCar.car.title).all((title, collection) -> {
            BooleanBuilder result = new BooleanBuilder();
            collection.forEach(o -> result.or(title.containsIgnoreCase(o)));
            return Optional.of(result);
        });
        bindings.bind(QCar.car.manufacturer).all((manufacturer, collection) -> {
            BooleanBuilder result = new BooleanBuilder();
            collection.forEach(o -> result.or(manufacturer.eq(o)));
            return Optional.of(result);
        });
        bindings.bind(QCar.car.model).all((model, collection) -> {
            BooleanBuilder result = new BooleanBuilder();
            collection.forEach(o -> result.or(model.eq(o)));
            return Optional.of(result);
        });
        bindings.bind(QCar.car.structure).all((structure, collection) -> {
            BooleanBuilder result = new BooleanBuilder();
            collection.forEach(o -> result.or(structure.eq(o)));
            return Optional.of(result);
        });
        bindings.bind(QCar.car.price.value).all((value, price) -> {
           Iterator<? extends Float> priceRange = price.iterator();
           return Optional.of(value.between(priceRange.next(), priceRange.next()));
        });
        bindings.bind(QCar.car.year).all((value, year) -> {
            Iterator<? extends Integer> yearRange = year.iterator();
            return Optional.of(value.between(yearRange.next(), yearRange.next()));
        });
    }
}
