package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Repositories.FormRepository;

import com.example.demo.Models.Form;

public interface FormRepository extends JpaRepository<Form, Long>{

}
