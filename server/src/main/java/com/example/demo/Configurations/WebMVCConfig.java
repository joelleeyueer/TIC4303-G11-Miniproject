package com.example.demo.Configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMVCConfig {
    @Bean
    public WebMvcConfigurer configureCors() {
        return new EnableCors("/auth/*", "*");
    }
}
