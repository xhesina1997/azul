package com.eureka.zuul.repository;

import com.eureka.zuul.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

  User findByUsername(String username);

  void deleteByUsername(String username);
}
