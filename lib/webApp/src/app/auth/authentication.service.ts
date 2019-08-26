import {Injectable} from '@angular/core';
import {AuthenticationApiService} from "../api/authentication-api.service";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private authenticationApiService: AuthenticationApiService,
        private cookieService: CookieService,
    ) {
        if(this.cookieService.check("USER")){
            this.user = JSON.parse(this.cookieService.get("USER")).user;
        }
    }

    public user: any;

    public isAuthenticated():boolean {
        if(this.user != null) return true;
        else return false;
    }

    public signIn(usernameOrEmail: string, password: string) {
        return new Promise((resolve, reject) => {
            this.cookieService.check("USER") ? this.cookieService.delete("USER") : {};
            let singInRequestData: any = {
                usernameOrEmail: usernameOrEmail,
                password: password
            };
            this.authenticationApiService.signIn(singInRequestData).subscribe((data: any) => {
                this.user = data.user;

                this.createCookie(data);

                resolve(data);
            }, error => {
                console.log(error);
                reject(error);
            })
        })
    }

    public logOut(){
        this.user = null;
        this.cookieService.delete("USER")
    }

    private createCookie(data) {
        this.cookieService.set("USER", JSON.stringify(data));
    }
}
