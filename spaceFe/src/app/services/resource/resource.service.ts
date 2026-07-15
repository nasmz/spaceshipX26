import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from '../../models/resource.model'; // model resources data

@Injectable({
  providedIn: 'root',
})
export class ResourceService {

  private readonly apiUrl = 'http://localhost:3000/resources';

  constructor(private readonly http: HttpClient) { }

  getResourcesList() {//get all resources
    return this.http.get<Resource[]>(this.apiUrl);
  }

  getResourceById(id: number) {//get a resource by ID
    return this.http.get<Resource>(`${this.apiUrl}/${id}`);
  }

  addResource(resource: Resource) {//add a new resource
    return this.http.post<Resource>(this.apiUrl, resource);
  }

  updatePassengerResource(id: number, resource: Resource) {//update passenger resource
    return this.http.put<Resource>(`${this.apiUrl}/${id}`, resource);
  }
  
  deleteResource(id: number) {//delete a resource
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  accessResource(id: number, quantity: number) {//access a resource for passenger
    return this.http.post(`${this.apiUrl}/${id}/access`, { quantity });
  }

}
