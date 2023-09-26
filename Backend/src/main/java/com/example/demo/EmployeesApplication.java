package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@Configuration
//@PropertySource(value="classpath:application.properties")
public class EmployeesApplication {
	public static void main(String[] args) {
		SpringApplication.run(EmployeesApplication.class, args);
	}

}
