package com.eureka.zuul.controller;

import com.azul.coredomain.meta.authentication.*;
import com.eureka.zuul.client.UserClient;
import com.azul.coredomain.meta.model.ApiResponse;
import com.eureka.zuul.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtTokenProvider tokenProvider;

    @Autowired
    UserClient userClient;

    @PostConstruct
    private void addAdminUser() {
        User user = new User("admin", "admin", "admin@admin.com", "admin");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role userRole = new Role();
        userRole.setName(RoleName.ROLE_ADMIN);
        user.setRoles(Collections.singleton(userRole));
        if (userClient.getUserByUsernameOrEmail(user.getUsername()) == null) {
            userClient.addUser(user);
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {

        User user = new User(signUpRequest.getName(), signUpRequest.getUsername(),
                signUpRequest.getEmail(), signUpRequest.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = new Role();

        userRole.setName(RoleName.ROLE_USER);

        user.setRoles(Collections.singleton(userRole));

        ApiResponse apiResponse = userClient.addUser(user);

        if (!apiResponse.getSuccess()) {
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(user.getUsername()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }
}
