import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) { }

    userNameOrEmail: string;
    password: string;

  ngOnInit() {

  }

  submit(key) : void {
    if(key == 'email') this.authenticationService.login(this.userNameOrEmail, this.password);
    else if (key == 'google') this.authenticationService.loginWithGoogle();
  }

}
