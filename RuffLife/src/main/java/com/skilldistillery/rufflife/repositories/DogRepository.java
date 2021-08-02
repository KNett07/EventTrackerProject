package com.skilldistillery.rufflife.repositories;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rufflife.entities.Dog;

public interface DogRepository extends JpaRepository<Dog, Integer> {

	Optional<Dog> findDogByName(String name);

	
	
	
}
