import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LOCALE_ID} from '@angular/core';
import {EventService} from "./services/event.service";
import {isPlatformBrowser} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";

declare let gtag: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'webApp';
    globalLanguage: any;
    applicationSettings = {language: "sq"};

    constructor(private translate: TranslateService,
                private router: Router,
                @Inject(PLATFORM_ID) private platform: Object) {

        this.router.events.subscribe(event => {
            if(event instanceof NavigationEnd){
                gtag('config', 'G-P4KW16RS51',
                    {
                        'page_path': event.urlAfterRedirects
                    }
                );
            }
        });

        if(isPlatformBrowser(this.platform)){
            if (localStorage.getItem('applicationSettings') != null) {
                translate.setDefaultLang(JSON.parse(localStorage.getItem('applicationSettings')).language);
            }
            else {
                localStorage.setItem('applicationSettings', JSON.stringify(this.applicationSettings));
            }
        }else {
            localStorage.setItem('applicationSettings', JSON.stringify(this.applicationSettings));
        }

        EventService.language.subscribe((res:any) => {
            this.globalLanguage = res;
            this.applicationSettings.language = res;
            isPlatformBrowser(this.platform) ? localStorage.setItem('applicationSettings', JSON.stringify(this.applicationSettings)) : {};
            translate.setDefaultLang(this.globalLanguage)
        })


    }
}
