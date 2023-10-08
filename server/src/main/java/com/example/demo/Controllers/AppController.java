package com.example.demo.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Models.Form;

@RestController
public class AppController {

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<String> postLogin(@RequestBody String loginRequest) {
        System.out.println("loginRequest is " + loginRequest);
        // Handle your login logic here.
        // After login, you can call getForm or redirect to "/form"
        if (loginRequest==null) {
            return new ResponseEntity<>("Login failed", null, 401);
        }
        return ResponseEntity.ok("Login successful! " + loginRequest);

    }

    @CrossOrigin(origins = "*")
    @PostMapping("/form")
    public ResponseEntity<String> postForm(@RequestBody Form form) {
        // Handle your form submission logic here.
        // After form submission, you can call getEnd or redirect to "/end"
        System.out.println(null == form ? "form is null" : form.toString());

        return ResponseEntity.ok("Form submitted!");
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/end")
    public ResponseEntity<String> postLogout() {
        // Handle your end logic here.
        System.out.println("Logout successful!");

        return ResponseEntity.ok("Logged out successfully");
    }

    @GetMapping("/")
    public ResponseEntity<String> getHome() {
        return ResponseEntity.ok("Welcome to the home page!");
    }
}
