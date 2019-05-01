import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UtilsService } from '../utils/utils.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from "jwt-decode";
// import { EventService } from '../@core/events/events.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    public token: string;
    private decodedToken: any

    public static user: any;

    public static gotUserEvent = new Subject();

    private tokenLoginUrl = UtilsService.getApiUrl() + 'api/v1/auth/token';

    constructor(private http: HttpClient, private router: Router, private cookies: CookieService) {


        if (this.cookies.check('auth_app_cookie')) {
            this.decodedToken = jwt_decode(JSON.parse(this.cookies.get('auth_app_cookie')).token);
            this.token = JSON.parse(this.cookies.get('auth_app_cookie')).token;
        }

    }


    login(email: string, password: string) {
        return this.http.post<any>(UtilsService.getApiUrl() + 'api/v1/auth/login', { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.decodedToken = jwt_decode(JSON.stringify(user.token));
                    this.token = user.token;
                    this.cookies.set('auth_app_cookie', JSON.stringify(user), new Date(this.decodedToken.exp * 1000));
                    // EventService.emitUserAuth();
                }

                return user;
            }));
    }

    logout() {
        this.cookies.delete('auth_app_cookie');
        this.token = null;
        this.decodedToken = null;
        this.router.navigate(['/auth'])
    }

    isExpired() {
        if (this.decodedToken == null) return true
        else return this.decodedToken.exp * 1000 < new Date().getTime();
    }

    initialize() {
        // if (!this.isExpired()) EventService.emitUserAuth();
    }

    setUser() {
        this.http.post(this.tokenLoginUrl, this.token).subscribe((res: any) => {
            AuthenticationService.user = res.user;
            AuthenticationService.gotUserEvent.next();
        });
    }

}