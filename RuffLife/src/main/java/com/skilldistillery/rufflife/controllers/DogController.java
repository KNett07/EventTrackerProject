package com.skilldistillery.rufflife.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.rufflife.entities.Dog;
import com.skilldistillery.rufflife.services.DogService;

@RestController
@RequestMapping("api")
public class DogController {
	
	@Autowired
	private DogService serv;
	
	@GetMapping("dogs")
	public List<Dog> listDogs(){
		return serv.allDogs();
	}

}
