package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Form;
import com.example.demo.Repositories.FormRepository;

@Service
public class FormService {

    @Autowired
    private FormRepository formRepository;

    public boolean saveForm(Form form) {
        try {
            formRepository.save(form);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
}
