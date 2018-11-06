import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading=false;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  registerUser( form:NgForm ) {

    if ( form.invalid ) {
      return;
    }
    this.userService.createUser(form.value.email,form.value.password);
  }

}
