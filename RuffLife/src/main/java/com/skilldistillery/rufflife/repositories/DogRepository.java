package com.skilldistillery.rufflife.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rufflife.entities.Dog;

public interface DogRepository extends JpaRepository<Dog, Integer> {

	List<Dog> findDogByName(String name);

	
	
	
}
