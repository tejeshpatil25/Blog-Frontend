import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public username:string='';

  public email:string='';

  public password:string='';
  
  constructor(private authserviceService: AuthserviceService) { }

  ngOnInit(): void {
  }
  // submit(){
  //   const obj = {
  //     username:  this.username,
  //     email: this.email,
  //     password: this.password
  //   }
  //   console.log(obj);

  //   this.authserviceService.getToken().subscribe()
  // }


}
