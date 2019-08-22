package com.eureka.zuul.security;


import com.eureka.zuul.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        return userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail).get();
    }

    @Transactional
    public UserDetails loadUserById(String id) {
        return userRepository.findById(id).get();
    }
}
