import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersData } from '../../models/users.model';

@Injectable({
  providedIn: 'root',
})

export class PassengerService {

  private readonly apiUrl = 'http://localhost:3000/passengers';

  constructor( private readonly http: HttpClient) { }  

  getPassengers() {//get all passengers
    return this.http.get<UsersData[]>(this.apiUrl);
  }

  getPassengerById(id: number) {//get a passenger by ID
    return this.http.get<UsersData>(`${this.apiUrl}/${id}`);
  }

  addPassenger(passenger: UsersData) {//add a new passenger
    return this.http.post<UsersData>(this.apiUrl, passenger);
  }

  updatePassenger(id: number, passenger: UsersData) {//update a passenger
    return this.http.put<UsersData>(`${this.apiUrl}/${id}`, passenger);
  }

  deletePassenger(id: number) {//delete a passenger
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
