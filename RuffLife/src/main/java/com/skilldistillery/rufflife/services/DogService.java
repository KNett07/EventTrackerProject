package com.skilldistillery.rufflife.services;

import java.util.List;

import com.skilldistillery.rufflife.entities.Dog;

public interface DogService {
	
	List<Dog> allDogs();
	
	List<Dog> searchByName(String name);
	
	Dog addDog(Dog dog);
	
	Dog updateDog(Dog dog);

	boolean deleteDog(int id);




}
