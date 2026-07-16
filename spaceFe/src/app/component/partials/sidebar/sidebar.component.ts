import { Component } from '@angular/core';
// import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isLoggedIn = false;
  userSess:any = {};
  vesselCall:any;
  
  vessels:any = [];
  nowUser:any = {};
  
  // constructor(private stateSvc: StateService) { }

  // ngOnInit(): void {
	// this.stateSvc.isLoggedIn
	// .subscribe((result:any) => {
	// 	this.isLoggedIn = result;
	// 	if(this.isLoggedIn){			
	// 		let sessionNow = this.stateSvc.getLocalSession();
	// 		if(sessionNow?.user){
	// 			this.nowUser = sessionNow?.user;
	// 		}
	// 	}
	// });
  // }
  
  // ngOnDestroy(){
	// if(this.vesselCall){
	// 	this.vesselCall.unsubscribe();
	// }
  // }
}
