import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AuthenticationService} from "../auth/authentication.service";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {EventService} from "../services/event.service";

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

    constructor(private router: Router, protected authenticationService: AuthenticationService,) {
        this.router.events.subscribe((event: any) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }

                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }

    protected loading = false;
    public selected: any;

    ngOnInit() {
        this.selected = JSON.parse(localStorage.getItem('applicationSettings')).language;

    }

    onChange(event){
        EventService.language.next(event.value);

    }
    logOut() {
        this.authenticationService.logout();
        this.router.navigate(["/pages/listings"]);
    }

}
