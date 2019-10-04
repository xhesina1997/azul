import { Component, OnInit } from '@angular/core';
import {AuthenticationApiService} from "../../api/authentication-api.service";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
      private authenticationApiService: AuthenticationApiService,
      private authenticationService: AuthenticationService,
      private router: Router
  ) { }

  protected name: string;
  protected username: string;
  protected email: string;
  protected password: string;

  ngOnInit() {
  }

  protected submit() : void {
    let singUpRequestData: any = {
      name: this.name,
      username: this.username,
      // email: this.email,
      password: this.password
    }
    this.authenticationApiService.signUp(singUpRequestData).subscribe(data => {
      this.authenticationService.signIn(this.username, this.password).then(() => {
        this.router.navigate(['/mobile/search']);
      });
    }, error => {
      console.log(error);
    })
  }

}
