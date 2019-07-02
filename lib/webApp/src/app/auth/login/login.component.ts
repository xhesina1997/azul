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

  protected userNameOrEmail: string;
  protected password: string;

  ngOnInit() {

  }

  protected submit() : void {
    this.authenticationService.signIn(this.userNameOrEmail, this.password).then(() => {
        this.router.navigate(['/pages/listings'])
    });
  }

}
