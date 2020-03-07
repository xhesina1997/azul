import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LOCALE_ID} from '@angular/core';
import {EventService} from "./services/event.service";
import {isPlatformBrowser} from "@angular/common";

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
                @Inject(PLATFORM_ID) private platform: Object) {
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
