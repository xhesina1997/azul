import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor(private _authService: AuthenticationService, private _router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._authService.isLoggedIn) {
            return true;
        }
        this._router.navigate(['/auth/login']);
        return false;
    }
}
