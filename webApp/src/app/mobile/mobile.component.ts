import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AuthenticationService} from "../auth/authentication.service";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {EventService} from "../services/event.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

    constructor(private router: Router,
                protected authenticationService: AuthenticationService,
                @Inject(PLATFORM_ID) private platform: Object) {
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

      loading = false;
    public selected: any;

    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        if(isPlatformBrowser(this.platform)) {
            this.selected = JSON.parse(localStorage.getItem('applicationSettings')).language;
        }else{
            this.selected = "sq";
        }
    }

    onChange(event){
        EventService.language.next(event.value);

    }

    logOut() {
        this.authenticationService.logout();
        this.router.navigate(["/pages/listings"]);
    }

      view;
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }

}
