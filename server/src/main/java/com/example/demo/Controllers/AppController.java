package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Models.Form;
import com.example.demo.Services.FormService;

@RestController
public class AppController {

    @Autowired
    private FormService formService;

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
        Form savedForm = formService.saveForm(form);
        if (savedForm==null) {
            return new ResponseEntity<>("Form submission failed", null, 401);
        }
        return ResponseEntity.ok("Form submitted!");
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/end")
    public ResponseEntity<String> postLogout() {
        // Handle your end logic here.
        System.out.println("Logout successful!");

        return ResponseEntity.ok("Logged out successfully");
    }
}
