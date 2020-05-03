import {Injectable} from '@angular/core';

declare let gtag: any;


@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {

    constructor() {
    }

    public eventEmitter(
        eventName: string,
        eventCategory: string,
        eventAction: string,
        eventLabel: string = null,
        eventValue: any = null) {
        gtag('event', eventName, {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        })
    }
}
