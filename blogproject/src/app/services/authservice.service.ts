import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthserviceService {
  public notifyLogin$ = new Subject();
  constructor(private httpClient:HttpClient) { }

  // getToken() {

  //   let token = localStorage.getItem('token');
 
  //   if (token) this.notifyLogin$.next(true);
 
  //   return token;
 
  //  }
  register(name:string,email:string,password:string){

    return this.httpClient.post('http://localhost:3000/user/register',{name,email,password})

  }
}
