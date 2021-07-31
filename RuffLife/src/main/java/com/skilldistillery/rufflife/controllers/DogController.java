package com.skilldistillery.rufflife.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
//	 /api/dogs/{name}
	@GetMapping("dogs/{name}")
	public List<Dog> findDogByName(String name){
		return serv.searchByName(name);
	}
	
	
	
//	/api/create
	@PostMapping("create")
	public Dog addDog(){
		return serv.addDog();
	}
	
	
	
//	/api/update/{id}
	
	@PutMapping("update/{id}")
	public Dog updateDog(@RequestBody Dog dog, HttpServletResponse res){
		if(dog == null) {
			res.setStatus(404);
		}
		
		return dog;	
		}
	
	
//	 /api/delete/{id}

	@DeleteMapping("delete/{id}")
	public void deleteDog(@PathVariable int id, HttpServletResponse res){
		boolean deleted = serv.deleteDog(id);
		if (deleted) {
			res.setStatus(204);

		}
		else {
			res.setStatus(404);
		}	}
}
