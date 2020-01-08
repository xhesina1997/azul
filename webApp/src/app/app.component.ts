import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LOCALE_ID} from '@angular/core';
import {EventService} from "./services/event.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'webApp';
    globalLanguage: any;
    applicationSettings = {language: "en"};

    constructor(private translate: TranslateService) {
        if (localStorage.getItem('applicationSettings') != null) {
            translate.setDefaultLang(JSON.parse(localStorage.getItem('applicationSettings')).language);
        }
        else {
            localStorage.setItem('applicationSettings', JSON.stringify(this.applicationSettings));
        }
        EventService.language.subscribe((res:any) => {
            this.globalLanguage = res;
            this.applicationSettings.language = res;
            localStorage.setItem('applicationSettings', JSON.stringify(this.applicationSettings));
            translate.setDefaultLang(this.globalLanguage)
        })


    }
}
