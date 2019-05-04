package com.azul.coredomain.meta.authentication;

import org.springframework.security.core.GrantedAuthority;

public class Role implements GrantedAuthority {

    private RoleName roleName;

    public Role() {

    }

    public Role(RoleName name) {
        this.roleName = name;
    }

    public RoleName getName() {
        return roleName;
    }

    public void setName(RoleName name) {
        this.roleName = name;
    }

    @Override
    public String getAuthority() {
        return roleName.name();
    }
}
