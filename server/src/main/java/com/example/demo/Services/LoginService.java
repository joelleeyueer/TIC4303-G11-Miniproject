package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Models.User;
import com.example.demo.Repositories.UserRepository;

@Service
public class LoginService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public String addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "user " + user.getUsername() + " added to system successfully";
    }

    public Boolean checkBannedUser(String username) {
        User user = userRepository.findByUsername(username).get();
        if (user.getIsBanned()) {
            return true;
        } else {
            return false;
        }
    }


    
}
