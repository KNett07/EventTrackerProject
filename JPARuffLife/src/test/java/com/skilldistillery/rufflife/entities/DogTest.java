package com.skilldistillery.rufflife.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DogTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Dog dog;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPARuffLife");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		dog = em.find(Dog.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		dog = null;
	}

	@Test
	void test_Dog_Entity_Mapping() {
		assertNotNull(dog);
		assertEquals("Tuco", dog.getName());
	}
	@Test
	void test_Dog_Toy_Mapping() {
		assertNotNull(dog);
		assertEquals("Squeaky Llama", dog.getFavToy());
	}
	@Test
	void test_Dog_Treat_Mapping() {
		assertNotNull(dog);
		assertEquals("Peanut Butter", dog.getFavTreat());
	}
	@Test
	void test_Dog_Vice_Mapping() {
		assertNotNull(dog);
		assertEquals("Scaredy Cat", dog.getVices());
	}

}
