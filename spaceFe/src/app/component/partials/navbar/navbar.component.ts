import { Component} from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  nowUser:any = {};
  isLoggedIn = false;
  availAccounts:any = [];
  
  vesselSummaries:any = {};
  name:any = "A.Bakar";
  userImage:any = "assets/images/unknown.jpg";
  notificationCount:number = 3;
  dropdownOpen = false;
  fullscreenEnabled = false;
  notificationData = [
		{
			id: 1,
			title: 'Your Elite author Graphic Optimization reward is ready!',
			message: 'Just 30 sec ago',
			time: 'Just now',
			read: false,
		},
		{
			id: 2,
			title: 'Angela Bernier answered your comment on the cash flow forecast\'s graph 🔔',
			message: '48 min ago',
			time: '48 min ago',
			read: false,
		},
		{
			id: 3,
			title: 'You have received 20 new messages in the conversation',
			message: '2 hrs ago',
			time: '2 hrs ago',
			read: true,
		}
	];

  
  constructor( private router: Router) { }

  ngOnInit(): void {
	setTimeout(() => {
		if(localStorage.getItem('is_dark_mode') == "1"){
			this.switchMode('dark');
		}
	}, 1500);

	const darkMode = localStorage.getItem('is_dark_mode');
	if (darkMode === '1') {
		this.switchMode('dark');
	} else {
		this.switchMode('light');
	}
  }



  switchMode(md:any){
	if(md == 'dark'){
		console.log('switchMode', md)
		$('html').attr('data-sidebar', 'dark');
		$('html').attr('data-topbar', 'dark');
		$('html').attr('data-theme', 'default');
		$('html').attr('data-bs-theme', 'dark');

		$('.map-overlay').css('background', "#000");
		localStorage.setItem('is_dark_mode', "1");
	}else { //default light mode
		$('html').attr('data-sidebar', 'dark');
		$('html').attr('data-topbar', 'light');
		$('html').attr('data-theme', 'default');
		$('html').attr('data-bs-theme', 'light');

		$('.map-overlay').css('background', "#fff");
		localStorage.setItem('is_dark_mode', "0");
	} 
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getUnreadCount(): number {
    return this.notificationData.filter(notification => !notification.read).length;
  }

  onNotificationClick(notification: any): void {
    notification.read = true;
    const redirectUrl = '/notification';
    this.router.navigate([redirectUrl]);
  }

  toggleSidebarSize() {
    const htmlEl = document.documentElement; // gets <html>
    const currentSize = htmlEl.getAttribute('data-sidebar-size');

    const newSize = currentSize === 'lg' ? 'sm' : 'lg';
    htmlEl.setAttribute('data-sidebar-size', newSize);
  }

  get isSidebarCollapsed(): boolean {
	return document.documentElement.getAttribute('data-sidebar-size') === 'sm';
  }
}
