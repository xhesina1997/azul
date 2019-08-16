import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../auth/authentication.service";
import {CarService} from "../../api/car.service";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    protected user;

    protected displayed = 0;

    constructor(private _authService: AuthenticationService, private carService: CarService) {
        this.user = this._authService.user;
    }

    ngOnInit() {
        this.getUserListings();
    }

    handleIndexChange(index) {
        this.displayed = index;
    }

    getUserListings(){
        this.carService.getCarsByUsername(this.user.username).subscribe(res => console.log(res))
    }

}
