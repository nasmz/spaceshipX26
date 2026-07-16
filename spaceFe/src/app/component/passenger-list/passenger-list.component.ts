import { Component } from '@angular/core';
import { UsersData } from '../../models/users.model';
import { PassengerService } from '../../services/passenger/passenger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passenger-list',
  imports: [CommonModule],
  templateUrl: './passenger-list.component.html',
  styleUrl: './passenger-list.component.css',
})
export class PassengerListComponent {

   constructor(private readonly passengerSvc: PassengerService) {}

  usersList: UsersData[] = [
      { 
        id: 1, 
       name: 'John Doe',
       email: 'john@gmail.com',
        age: 30,
        type: 'Passenger',
        gender: 'Male',
        membershipLevel: 'Gold',
        status: 'Active'
      },
      { 
         id: 2, 
       name: 'Jane Smith',
       email: 'jane@gmail.com',
        age: 25,
        type: 'Passenger',
        gender: 'Female',
        membershipLevel: 'Silver',
        status: 'Active'
      },
      { 
        id: 3, 
        name: 'John Doe',
        email: 'johncrew@gmail.com',
        age: 30,
        type: 'Crew',
        gender: 'Male',
        membershipLevel: 'Platinum',
        status: 'Active'
      },
    ];

    ngOnInit(): void {
      this.loadResources();
    }

    loadResources() {//list resources 
      this.passengerSvc.getPassengers().subscribe((data) => {
      console.log('Passengers list ....', data);
      });
    }

  addAccessResources(userId: number) { //add access resources 
    
    // this.passengerSvc.accessPassenger(userId).subscribe({
    //   next: (data) => {
    //     console.log('Access passenger response:', data);
    //   },
    //   error: (error) => {
    //     console.error('Error accessing passenger:', error);
    //   }
    // });
  }


}
