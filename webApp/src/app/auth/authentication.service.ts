import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {



    constructor(
        public  afAuth:  AngularFireAuth,
        public  router:  Router,
        private cookieService: CookieService,
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                console.log("FIREBASE USER: ", user);
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        });

        if(this.cookieService.check("USER")){
            this.user = JSON.parse(this.cookieService.get("USER")).user;
        }
    }

    //====================FIREBASE SHIT======================//
    user: User;
    async login(email:  string, password:  string) {
        try {
            await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.router.navigate(['mobile/search']);
        } catch (e) {
            alert("Error!"  +  e.message);
        }
    }

    async loginWithGoogle(){
        await  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        this.router.navigate(['mobile/search']);
    }

    async logout(){
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['auth/login']);
    }
    get isLoggedIn(): boolean {
        const  user  =  JSON.parse(localStorage.getItem('user'));
        return  user  !==  null;
    }
    //====================FIREBASE SHIT======================//
}
