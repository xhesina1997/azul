package com.eureka.zuul.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient("IMAGES-SERVICE")
public interface UserClient {

    @RequestMapping(value="/test", method = RequestMethod.GET)
    String test();
}
