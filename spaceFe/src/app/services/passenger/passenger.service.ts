import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from '../../models/passenger.model';

@Injectable({
  providedIn: 'root',
})

export class PassengerService {

  private readonly apiUrl = 'http://localhost:3000/passengers';

  constructor( private readonly http: HttpClient) { }  

  getPassengers() {//get all passengers
    return this.http.get<Passenger[]>(this.apiUrl);
  }

  getPassengerById(id: number) {//get a passenger by ID
    return this.http.get<Passenger>(`${this.apiUrl}/${id}`);
  }

  addPassenger(passenger: Passenger) {//add a new passenger
    return this.http.post<Passenger>(this.apiUrl, passenger);
  }

  updatePassenger(id: number, passenger: Passenger) {//update a passenger
    return this.http.put<Passenger>(`${this.apiUrl}/${id}`, passenger);
  }

  deletePassenger(id: number) {//delete a passenger
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
