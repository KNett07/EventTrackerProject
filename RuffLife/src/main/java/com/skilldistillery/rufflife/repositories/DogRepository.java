package com.skilldistillery.rufflife.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rufflife.entities.Dog;

public interface DogRepository extends JpaRepository<Dog, Integer> {

	Dog findDogByName(String name);

	
	
	
}
