import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule,HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/storage";
import { ScrollableDirective } from './directives/scrollable.directive';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

var config = {
    apiKey: "AIzaSyCwPRzecRZQMzJe9-V0HLhvuJc5wQFOM2c",
    authDomain: "azul-50203.firebaseapp.com",
    databaseURL: "https://azul-50203.firebaseio.com",
    projectId: "azul-50203",
    storageBucket: "azul-50203.appspot.com",
    messagingSenderId: "605379883061",
    appId: "1:605379883061:web:0d7cd8ae2a5507489c417c",
    measurementId: "G-HTJPK515HF"
};

@NgModule({
    declarations: [
        AppComponent,
        ScrollableDirective
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}