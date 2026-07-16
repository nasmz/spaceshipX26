import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceData } from '../../models/resource.model'; // model resources data

@Injectable({
  providedIn: 'root',
})
export class ResourceService {

  private readonly apiUrl = 'http://localhost:3000/resources';

  constructor(private readonly http: HttpClient) { }

  getResourcesList() {//get all resources
    return this.http.get<ResourceData[]>(this.apiUrl);
  }

  getResourceById(id: number) {//get a resource by ID
    return this.http.get<ResourceData>(`${this.apiUrl}/${id}`);
  }

  addResource(resource: ResourceData) {//add a new resource
    return this.http.post<ResourceData>(this.apiUrl, resource);
  }

  updatePassengerResource(id: number, resource: ResourceData) {//update passenger resource
    return this.http.put<ResourceData>(`${this.apiUrl}/${id}`, resource);
  }
  
  deleteResource(id: number) {//delete a resource
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  accessResource(id: number) {//access a resource for
    return this.http.post(`${this.apiUrl}/${id}/access`, {});
  }

}
