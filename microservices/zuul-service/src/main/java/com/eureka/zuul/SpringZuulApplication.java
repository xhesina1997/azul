package com.eureka.zuul;

import com.eureka.zuul.model.Role;
import com.eureka.zuul.model.User;
import com.eureka.zuul.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.cloud.openfeign.EnableFeignClients;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
@EnableSwagger2
@EnableZuulProxy
public class SpringZuulApplication implements CommandLineRunner {

	@Autowired
	UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(SpringZuulApplication.class, args);
	}

	@Override
	public void run(String... params) throws Exception {
//		User admin = new User();
//		admin.setUsername("admin");
//		admin.setPassword("admin");
//		admin.setEmail("admin@email.com");
//		admin.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_ADMIN)));
//
//		userService.signup(admin);
//
//		User client = new User();
//		client.setUsername("client");
//		client.setPassword("client");
//		client.setEmail("client@email.com");
//		client.setRoles(new ArrayList<Role>(Arrays.asList(Role.ROLE_CLIENT)));
//
//		userService.signup(client);
	}


}


