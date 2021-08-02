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
	public Dog searchByName(String name) {
		
		return repo.findDogByName(name);
	}


	
//	create
	
	@Override
	public Dog addDog(Dog dog) {
		if (dog == null) {
			
			dog.setName(dog.getName());
			dog.setFavToy(dog.getFavToy());
			dog.setFavTreat(dog.getFavTreat());
			dog.setFavPlace(dog.getFavPlace());
			dog.setVices(dog.getVices());
		}
		
		
		return dog;
	}
	
	
//	update
	
	@Override
	public Dog updateDog(Dog dog) {
		
if (dog.getId() > 0) {
			dog.setName(dog.getName());
			dog.setFavToy(dog.getFavToy());
			dog.setFavTreat(dog.getFavTreat());
			dog.setFavPlace(dog.getFavPlace());
			dog.setVices(dog.getVices());
		}
		
		
		return dog;
	}
	
//	delete
	
	@Override
	public boolean deleteDog(int id) {
		boolean deleted = false;
		Dog deleteDog = repo.getById(id);
		if(deleteDog.getId() > 0) {
			repo.delete(deleteDog);
			deleted = true;
		}

		
		return deleted;
	}





}
