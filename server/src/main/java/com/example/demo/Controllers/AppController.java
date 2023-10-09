package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    @PostMapping(value = "/form", consumes = "application/json")
    public ResponseEntity<String> postForm(@RequestBody Form form) {
        if (!checkFormPopulated(form)) {
            return new ResponseEntity<>("Incomplete form data", null, 400);
        }
        formService.saveForm(form);
        
        return ResponseEntity.ok("Form submitted!");
    }

    private Boolean checkFormPopulated(Form form){
        if (form.getName() == null || form.getName().isEmpty() || 
        form.getEmailAddress() == null || form.getEmailAddress().isEmpty() ||
        form.getPhoneNumber() == null || form.getPhoneNumber().isEmpty() ||
        form.getCountry() == null || form.getCountry().isEmpty() ||
        form.getGender() == null || form.getGender().isEmpty() ||
        form.getQualification() == null || form.getQualification().isEmpty()) {
            return false;
        } else {
            return true;
        }
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test successful!");
    }
}
