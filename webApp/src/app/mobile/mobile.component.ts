import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AuthenticationService} from "../auth/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss'],
    animations: [
        trigger('changeHeaderState', [
            state('closed', style({
                height: '50px'
            })),
            state('opened-half', style({
                height: '{{newHeight}}'
            }), {params: {newHeight: '200px'}}),
            transition('closed=>opened-half', animate('300ms')),
            transition('opened-half=>closed', animate('300ms'))
        ]),
        trigger('changeBodyState', [
            state('closed', style({
                height: 'calc(100% - 50px)'
            })),
            state('opened-half', style({
                height: '{{bodyHeight}}'
            }), {params: {bodyHeight: '200px'}}),
            transition('closed=>opened-half', animate('300ms')),
            transition('opened-half=>closed', animate('300ms'))
        ]),
    ]
})
export class MobileComponent implements OnInit {

    constructor(private router: Router, protected authenticationService: AuthenticationService) {}

    ngOnInit() {
    }

    overallState = 'closed';
    headerState = 'closed';
    headerHeight = '50px';
    bodyHeight = 'calc(100% - 50px)';

    changeStateMed(type) {
        if (this.headerState === 'closed') {
            this.headerHeight = '170px';
            this.bodyHeight = 'calc(100% - 170px)';
            this.headerState = 'opened-half';
            setTimeout(()=> {this.overallState = type;}, 400);
        } else {
            this.headerHeight = '50px';
            this.bodyHeight = 'calc(100% - 50px)';
            this.headerState = 'closed';
            this.overallState = 'closed'
        }
    }

    logOut() {
        this.authenticationService.logout();
        this.router.navigate(["/pages/listings"]);
    }

}
