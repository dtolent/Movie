import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading=false;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  onLogin( form:NgForm ) {

    if ( form.invalid ) {
      return;
    }
    this.userService.loginUser(form.value.email,form.value.password);
  }

}
