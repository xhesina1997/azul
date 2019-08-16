import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../auth/authentication.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
      private router: Router,
      protected authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(["/pages/listings"]);
  }

}
