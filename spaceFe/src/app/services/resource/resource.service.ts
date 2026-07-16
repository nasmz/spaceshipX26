import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourcePassenger } from '../../models/resource.model'; // model resources data

@Injectable({
  providedIn: 'root',
})
export class ResourceService {

  private readonly apiUrl = 'http://localhost:3000/resources';

  constructor(private readonly http: HttpClient) { }

  getResourcesList() {//get all resources
    return this.http.get<ResourcePassenger[]>(this.apiUrl);
  }

  getResourceById(id: number) {//get a resource by ID
    return this.http.get<ResourcePassenger>(`${this.apiUrl}/${id}`);
  }

  addResource(resource: ResourcePassenger) {//add a new resource
    return this.http.post<ResourcePassenger>(this.apiUrl, resource);
  }

  updatePassengerResource(id: number, resource: ResourcePassenger) {//update passenger resource
    return this.http.put<ResourcePassenger>(`${this.apiUrl}/${id}`, resource);
  }
  
  deleteResource(id: number) {//delete a resource
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  accessResource(id: number) {//access a resource for
    return this.http.post(`${this.apiUrl}/${id}/access`, {});
  }

}
