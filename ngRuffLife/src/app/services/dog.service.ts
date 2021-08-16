import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Dog } from '../models/dog';
import {catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  // baseUrl = 'http://localhost:8084/';
  url = environment.baseUrl + 'api/dogs';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Dog[]>{
    return this.http.get<Dog[]>(this.url).pipe(
    // catcherror throw error
    catchError((err:any)=>{
      console.log("error");
      return throwError(err);
    })
    )
  }

  show(dogName: any): Observable<Dog> {
    return this.http.get<Dog>(`${this.url}/${dogName}`, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('DogService.show(): error retrieving this doggie:' + dogName);
        return throwError(err);
      })
    );
  }

  create(dog: Dog): Observable<Dog> {

    return this.http.post<Dog>(this.url, dog, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('DogService.create(): error adding doggo');
        return throwError(err);
      })
    );
  }

  update(dog: Dog): Observable<Dog> {

    return this.http.put<Dog>(`${this.url}/${dog.id}`, dog, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('DogService.update(): error updating doggo');
        return throwError(err);
      })
    );
  }

  destroy(dogId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${dogId}`, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error('DogService.destroy(): error removing doggo info');
        return throwError(err);
      })
    );
  }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };
    return httpOptions;
  }

}



