import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './user-data.model';


@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(email: string, password: string) {
    const userData: UserData = { email:email,password:password };
    this.http.post('http://localhost:3000/api/user/register',userData)
    .subscribe(response => {
      console.log(response);
    });
  }

  loginUser(email: string, password: string) {
    const userData: UserData = { email:email,password:password };
    this.http.post('http://localhost:3000/api/user/login',userData)
    .subscribe(response => {
      console.log(response);
    });
  }

}
