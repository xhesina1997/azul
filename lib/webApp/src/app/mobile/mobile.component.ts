import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

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
            }), {params: {bodyHeight: 'calc(100% - 230px)'}}),
            transition('closed=>opened-half', animate('300ms')),
            transition('opened-half=>closed', animate('300ms'))
        ]),
    ]
})
export class MobileComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    overallState = 'closed';
    headerState = 'closed';
    headerHeight = '50px';
    bodyHeight = 'calc(100% - 50px)';

    changeStateMed() {
        if (this.headerState === 'closed') {
            this.headerHeight = '230px';
            this.bodyHeight = 'calc(100% - 230px)';
            this.headerState = 'opened-half';
            this.overallState = 'half'
        } else {
            this.headerHeight = '50px';
            this.bodyHeight = 'calc(100% - 50px)';
            this.headerState = 'closed';
            this.overallState = 'closed'
        }
    }

    changeStateFull() {

        if (this.headerState === 'closed') {
            this.headerHeight = 'calc(100% - 50px)';
            this.bodyHeight = '50px';
            this.headerState = 'opened-half';
            this.overallState = 'full'

        } else {
            this.headerHeight = '50px';
            this.bodyHeight = 'calc(100% - 50px)';
            this.headerState = 'closed';
            this.overallState = 'closed';
        }
    }

}
