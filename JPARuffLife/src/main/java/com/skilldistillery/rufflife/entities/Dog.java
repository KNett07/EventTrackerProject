package com.skilldistillery.rufflife.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dog {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	@Column(name = "fav_toy")
	private String favToy;
	
	@Column(name = "fav_treat")
	private String favTreat;
	
	@Column(name = "fav_place")
	private String favPlace;
	
	private String vices;

	public Dog() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFavToy() {
		return favToy;
	}

	public void setFavToy(String favToy) {
		this.favToy = favToy;
	}

	public String getFavTreat() {
		return favTreat;
	}

	public void setFavTreat(String favTreat) {
		this.favTreat = favTreat;
	}

	public String getFavPlace() {
		return favPlace;
	}

	public void setFavPlace(String favPlace) {
		this.favPlace = favPlace;
	}

	public String getVices() {
		return vices;
	}

	public void setVices(String vices) {
		this.vices = vices;
	}

	

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Dog [id=").append(id).append(", name=").append(name).append(", favToy=").append(favToy)
				.append(", favTreat=").append(favTreat).append(", favPlace=").append(favPlace).append(", vices=")
				.append(vices).append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Dog other = (Dog) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	

}
