package com.eureka.zuul.client;

import com.azul.coredomain.meta.authentication.User;
import com.azul.coredomain.meta.model.ApiResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient("USER-SERVICE")
public interface UserClient {

    @RequestMapping(value = "/id/{userId}", method = RequestMethod.GET)
    User getUserById(@PathVariable("userId") String userId);

    @RequestMapping(value = "/usernameOrEmail/{usernameOrEmail}", method = RequestMethod.GET)
    User getUserByUsernameOrEmail(@PathVariable("usernameOrEmail") String usernameOrEmail);

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    ApiResponse addUser(@RequestBody User user);
}
