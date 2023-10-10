package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Form;
import com.example.demo.Services.FormService;

import jakarta.validation.Valid;


@RestController
public class AppController {

    @Autowired
    private FormService formService;

    @PostMapping(value = "/form", consumes = "application/json")
    public ResponseEntity<String> postForm(@RequestBody @Valid Form form) {
        if (formService.saveForm(form)) {
            return ResponseEntity.ok("Form submitted!");
        } else {
            return new ResponseEntity<>("Failed to save the form", HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test successful!");
    }
}
