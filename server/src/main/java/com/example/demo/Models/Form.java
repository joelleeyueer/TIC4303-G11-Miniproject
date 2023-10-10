package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty(message = "Name cannot be empty")
    @Size(min = 2, message = "Name must be at least 2 characters long")
    @Column(nullable = false)
    private String name;

    @NotEmpty(message = "Email address cannot be empty")
    @Email(message = "Email address must be valid")
    @Column(nullable = false)    
    private String emailAddress;

    @NotEmpty(message = "Phone number cannot be empty")
    @Column(nullable = false)   
    private String phoneNumber;

    @NotEmpty(message = "Country cannot be empty")
    @Column(nullable = false)  
    private String country;

    @NotEmpty(message = "Gender cannot be empty")
    @Column(nullable = false)  
    private String gender;

    @NotEmpty(message = "Qualification cannot be empty")
    @Column(nullable = false)  
    private String qualification;

}
