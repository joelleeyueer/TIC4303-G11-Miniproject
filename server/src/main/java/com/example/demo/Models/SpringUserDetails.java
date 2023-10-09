package com.example.demo.Models;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class SpringUserDetails implements UserDetails{
    
    private String username;
    private String password;
    private Boolean isBanned;
    private List<GrantedAuthority> authorities; 


    public SpringUserDetails(User user) {
        username=user.getUsername();
        password=user.getPassword();
        isBanned=user.getIsBanned();
        this.authorities = Collections.emptyList();

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return !isBanned;
    }
}
