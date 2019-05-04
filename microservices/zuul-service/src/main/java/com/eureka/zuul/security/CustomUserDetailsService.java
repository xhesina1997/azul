package com.eureka.zuul.security;

import com.azul.coredomain.meta.exceptions.ResourceNotFoundException;
import com.eureka.zuul.client.UserClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserClient userClient;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        return userClient.getUserByUsernameOrEmail(usernameOrEmail);
    }

    @Transactional
    public UserDetails loadUserById(String id) {
        return userClient.getUserById(id);
    }
}
