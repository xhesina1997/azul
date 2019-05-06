package com.example.userservice.controller;

import com.azul.coredomain.meta.exceptions.ResourceNotFoundException;
import com.azul.coredomain.meta.authentication.User;
import com.azul.coredomain.meta.model.ApiResponse;
import com.example.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        return "user service works";
    }

    @RequestMapping(value = "/id/{userId}", method = RequestMethod.GET)
    public User getUserById(@PathVariable String userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    }

    @RequestMapping(value = "/usernameOrEmail/{usernameOrEmail}", method = RequestMethod.GET)
    public User getUserByUsernameOrEmail(@PathVariable String usernameOrEmail) {
        Optional<User> userOptional = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail);
        return (userOptional.isPresent()) ? userOptional.get() : null;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ApiResponse addUser(@RequestBody User user) {
        if(userRepository.existsByUsername(user.getUsername())) {
            return new ApiResponse(false, "Username is already taken!");
        }

        if(userRepository.existsByEmail(user.getEmail())) {
            return new ApiResponse(false, "Email Address already in use!");
        }

        userRepository.save(user);
        return new ApiResponse(true, "User saved successfully");
    }
}