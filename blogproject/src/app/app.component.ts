import { Component } from '@angular/core';
import { Router } from 'express';
import { AuthserviceService } from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // loggedIn = false;
  // constructor(private router: Router, private authService: AuthserviceService) {}
  
  title = 'blogproject';
  
  // ngOnInit() {

  //   this.authService.notifyLogin$.subscribe((data) => {

  //     this.loggedIn = !!this.authService.getToken();
      
  //     this.loggedIn = true;

  //   });

  // }

  // logout() {
    
  //   localStorage.removeItem('token');

  //   this.router.navigate(['/login']);

  //   this.loggedIn = false;

  // }

}
