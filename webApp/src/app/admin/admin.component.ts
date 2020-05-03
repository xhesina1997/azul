import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../auth/authentication.service";
import {Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/index";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

    constructor(public authenticationService: AuthenticationService,
                private router: Router,) {
        AuthenticationService.loginSubject
            .pipe(takeUntil(this.unSubscribeAuthSubject))
            .subscribe(user => {
                if (user) {
                    if(user.email == 'rei23b@gmail.com'){
                        this.verificationPassed = true
                        this.user = user;
                    }
                }
            });
        //
        // if(authenticationService.user = null){
        //     this.router.navigate(['/mobile/home'])
        // }else if(authenticationService.user.email != 'rei23b@gmail.com'){
        //     this.router.navigate(['/mobile/home'])
        // }else{
        //   this.verificationPassed = true
        // }
    }

    public verificationPassed = false;
    public user = {};
    private unSubscribeAuthSubject: Subject<any> = new Subject();

    ngOnInit() {
    }

    ngOnDestroy(){
        this.unSubscribeAuthSubject.complete();
    }

    generateUserReport(){
        
    }

}
