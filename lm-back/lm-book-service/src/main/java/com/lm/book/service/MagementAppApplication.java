package com.lm.book.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MagementAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MagementAppApplication.class, args);
	}

}
