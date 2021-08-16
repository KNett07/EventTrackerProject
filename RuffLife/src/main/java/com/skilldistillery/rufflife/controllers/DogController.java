package com.skilldistillery.rufflife.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin({"*", "http://localhost:4204"})
@RestController
@RequestMapping("api")
public class DogController {

	@Autowired
	private DogService serv;

	@GetMapping("dogs")
	public List<Dog> listDogs() {
		return serv.allDogs();
	}

//	 /api/dogs/{name}
	
	@GetMapping("dog/{name}")
	public Dog findDogByName(@PathVariable String name, HttpServletResponse res) {
		Dog dog = serv.searchByName(name);
		return dog;
	}

//	/api/create
	
	@PostMapping("dogs")
	public Dog addDog(@RequestBody Dog dog,HttpServletRequest req, HttpServletResponse res){
		try {
			 dog = serv.addDog(dog);
			res.setStatus(200);
			return dog;
}
	catch(Exception e) {
		res.setStatus(400);
		dog = null;
	}
	
	return dog;
		
	}
	

//	/api/update/{id}

	@PutMapping("dogs/{id}")
	public Dog updateDog(@RequestBody Dog dog, HttpServletResponse res) {
		
		try {
			 dog = serv.updateDog(dog);
			res.setStatus(200);
			return dog;
}
	catch(Exception e) {
		res.setStatus(400);
		dog = null;
	}
	
	return dog;
		
	}

//	 /api/delete/{id}

	@DeleteMapping("dogs/{id}")
	public String deleteDog(@PathVariable Integer id, HttpServletResponse res) {
		
		try {
			boolean deleted = serv.deleteDog(id);
			if (deleted) {
				res.setStatus(204);
				return "Deleted";

			} else {
				res.setStatus(404);
				return "Not Found";
			}
		} catch (Exception e) {
			res.setStatus(400);
			return "Failed";
		} 
	}
}
