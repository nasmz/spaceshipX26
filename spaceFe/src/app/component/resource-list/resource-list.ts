import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource/resource.service';
import { CommonModule } from '@angular/common';
import { ResourcePassenger } from '../../models/resource.model';

@Component({
  selector: 'app-resource-list',
  imports: [CommonModule],
  templateUrl: './resource-list.html',
  styleUrl: './resource-list.css',
})

export class ResourceList implements OnInit {

  constructor(private readonly resourceSvc: ResourceService) {}

  resources: ResourcePassenger[] = [
    { id: 1, resourceName: 'Food Station', resourcesLevel: 'Silver', status: 'Available' },
    { id: 2, resourceName: 'Sleeping Pods', resourcesLevel: 'Silver', status: 'Available' },
    { id: 3, resourceName: 'Basic Hygiene', resourcesLevel: 'Silver', status: 'Available' },
    { id: 4, resourceName: 'Private Cabins', resourcesLevel: 'Gold', status: 'Available' },
    { id: 5, resourceName: 'Advanced Medical Bay', resourcesLevel: 'Gold', status: 'Available' },
    { id: 6, resourceName: 'Luxury O2 Pods', resourcesLevel: 'Platinum', status: 'Available' },
    { id: 7, resourceName: 'VIP Recreation Deck', resourcesLevel: 'Platinum', status: 'Available' }
  ];

  ngOnInit(): void {
   this.loadResources();
  }

  loadResources() {//list resources 
    this.resourceSvc.getResourcesList().subscribe((resources) => {
    console.log('Resources list ....', resources);
    });
  }

  addAccessResources(resourceId: number) { //add access resources 
    
    this.resourceSvc.accessResource(resourceId).subscribe({
      next: (data) => {
        console.log('Access resource response:', data);
      },
      error: (error) => {
        console.error('Error accessing resource:', error);
      }
    });
  }








}
