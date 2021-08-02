package com.skilldistillery.rufflife.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.rufflife.entities.Dog;
import com.skilldistillery.rufflife.repositories.DogRepository;

@Service
public class DogServiceImpl implements DogService {

	@Autowired
	private DogRepository repo;
	
	@Override
	public List<Dog> allDogs() {
		
		return repo.findAll();
	}

	
//	by name
	
	@Override
	public Dog searchByName(String name) {
		Optional<Dog> dog = repo.findDogByName(name);
		
		return dog.get();
	}


	
//	create
	
	@Override
	public Dog addDog(Dog dog) {
		return repo.save(dog);
	}
	
	
//	update
	
	@Override
	public Dog updateDog(Dog dog) {
		return repo.save(dog);
		
	}
	
//	delete
	
	@Override
	public boolean deleteDog(int id) {
		try {
		repo.deleteById(id);
		return true;
		} catch(Exception e) {
		
		return false;
		}
		}
	}
