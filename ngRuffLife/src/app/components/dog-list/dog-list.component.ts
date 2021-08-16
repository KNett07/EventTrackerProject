import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogs: Dog[] = [];


  selected: Dog | null = null;
  newDog = new Dog();
  editDog: Dog | null = null;

  constructor(
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    this.loadDogs();

  }

  loadDogs(){

    this.dogService.index().subscribe(
      dogs => {
        this.dogs = dogs;

      }, noDogs => {
        console.error("DogList Component error");
        console.error(noDogs)
      }
    )

  }

  getDogCount() : Number {
    return this.dogs.length;
  }

  displayDog(dog: any): void {
    this.selected = dog;
  }

  displayTable(): void {
    this.selected = null;
  }

  addDog() : void {
    this.dogService.create(this.newDog).subscribe(
      data => {
        this.reload();
      },
      error => {
        console.log(error);
        console.log("Error creating doggo through service.")
      }
    );
    this.newDog = new Dog();
    // this.todos = this.todoService.index();
  }



  setEditDog() : void {
    this.editDog = Object.assign({}, this.selected);
  }

  updateDog(dog: Dog) {
    this.dogService.update(dog).subscribe(
      data => {
        this.reload();
      },
      error => {
        console.log(error);
        console.log("error updating todo through service")
      }
    );
    this.editDog = null;
    this.selected = null;
  }

  deleteDog(dogId: number) {
    this.dogService.destroy(dogId).subscribe(
      data => {
        this.reload();
      },
      error => {
        console.log(error);
        console.log("error deleting dog info through service")
      }
    );
  }

  reload() {
    this.dogService.index().subscribe(
      data => {
        this.dogs = data;
      },
      err => {
        console.log("Error retreiving doggos from service")
      }
    );
  }



}
