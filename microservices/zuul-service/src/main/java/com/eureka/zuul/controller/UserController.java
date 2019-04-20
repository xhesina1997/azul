package com.eureka.zuul.controller;


import com.eureka.zuul.dto.UserDataDTO;
import com.eureka.zuul.model.User;
import com.eureka.zuul.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.swagger2.mappers.ModelMapper;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserService userService;

  @Autowired
  private ModelMapper modelMapper;

  @PostMapping("/signin")
  public String login(@RequestParam String username,  @RequestParam String password) {
    return userService.signin(username, password);
  }

  @PostMapping("/signup")
  public String signup(@RequestBody UserDataDTO user) {
    return userService.signup(this.userFromUserDataDTO(user));
  }

  @DeleteMapping(value = "/{username}")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  public String delete(@PathVariable String username) {
    userService.delete(username);
    return username;
  }

  @GetMapping(value = "/{username}")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  public User search(@PathVariable String username) {
    return userService.search(username);
  }

  @GetMapping(value = "/me")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
  public User whoAmI(HttpServletRequest req) {
    return userService.whoami(req);
  }

  @GetMapping("/refresh")
  @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
  public String refresh(HttpServletRequest req) {
    return userService.refresh(req.getRemoteUser());
  }

  private User userFromUserDataDTO(UserDataDTO userDataDTO){
    User user = new User();
    user.setEmail(userDataDTO.getEmail());
    user.setRoles(userDataDTO.getRoles());
    user.setUsername(userDataDTO.getUsername());
    return user;
  }

}
