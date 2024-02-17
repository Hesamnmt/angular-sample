import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any = {};
  submitted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginData); // Use this data for login authentication
  }
}
