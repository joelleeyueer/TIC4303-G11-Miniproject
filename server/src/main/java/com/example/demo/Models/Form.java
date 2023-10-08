package com.example.demo.Models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Form {

    private String name;
    private String emailAddress;
    private String phoneNumber;
    private String country;
    private String gender;
    private String qualification;

    
}
