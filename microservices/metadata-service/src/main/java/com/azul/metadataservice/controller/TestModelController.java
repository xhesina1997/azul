package com.azul.metadataservice.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "/test")
public class TestModelController {

    @RequestMapping(method = RequestMethod.GET)
    public String test(){
        return "Success!";
    }
}
