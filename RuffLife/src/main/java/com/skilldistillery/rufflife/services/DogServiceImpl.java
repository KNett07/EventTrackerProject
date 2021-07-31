package com.skilldistillery.rufflife.services;

import java.util.List;

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
	public List<Dog> searchByName(String name) {
		
		return repo.findDogByName(name);
	}


	
//	create
	@Override
	public Dog addDog() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
//	update
	
//	delete
	@Override
	public boolean deleteDog(int id) {
		
		
		return false;
	}



}
