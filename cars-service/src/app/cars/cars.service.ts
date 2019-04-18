import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { map } from  'rxjs/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CarsService {
  private apiUrl = "http://localhost:3000/api/cars";
  randomValue = Math.random();
  constructor(private http : HttpClient) { }

  getCars() : Observable<Car[]>{
    return this.http
    .get<Car[]>(this.apiUrl);    
  }

  getCar(id : number) : Observable<Car>{
    return this.http
    .get<Car>(this.apiUrl + `/${id}`);    
  }

  addCar(data) : Observable<Car>
  {
    return this.http
    .post<Car>(this.apiUrl, data);  
  }

  updateCar(id : number, data) : Observable<Car>{
    return this.http
    .put<Car>(this.apiUrl + `/${id}`, data);    
  }

  removeCar(id : number) : Observable<Car>{
    return this.http
    .delete<Car>(this.apiUrl + `/${id}`);    
  }
}
