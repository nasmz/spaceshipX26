import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './component/partials/sidebar/sidebar.component';
import { NavbarComponent } from './component/partials/navbar/navbar.component';
import { FootbarComponent } from './component/partials/footbar/footbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    FootbarComponent
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('spaceFe');
}
