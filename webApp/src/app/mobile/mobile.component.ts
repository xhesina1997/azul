import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AuthenticationService} from "../auth/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

    constructor(private router: Router, protected authenticationService: AuthenticationService) {}

    ngOnInit() {
    }

    logOut() {
        this.authenticationService.logout();
        this.router.navigate(["/pages/listings"]);
    }

}
