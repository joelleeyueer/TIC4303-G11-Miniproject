package com.example.demo.Configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class EnableCors implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS") // adjust this to your needs
                    .allowedOrigins("*")
                    .allowedHeaders("*");
    }
}
