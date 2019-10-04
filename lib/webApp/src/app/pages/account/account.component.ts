import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from "../../auth/authentication.service";
import { CarService } from "../../api/car.service";
import {MatBottomSheet, MatDialog} from "@angular/material";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    @ViewChild('deleteCarModal') deleteCarModal: any;
    @ViewChild('bottomSheet') bottomSheetContent: any;
    protected user;
    public dialogRef: any;
    protected displayed = 0;
    protected listingsCreatedByUser: any[] = [];
    protected favouriteListings: any[] = [];

    protected carToBeDeleted: any;
    constructor(private _authService: AuthenticationService,
                private carService: CarService,
                private bottomSheet: MatBottomSheet,
                public dialog: MatDialog,) {
        this.user = this._authService.user;
    }

    ngOnInit() {
        this.getUserListings();
        this.getUserFavourites();
    }

    handleIndexChange(index) {
        this.displayed = index;
    }

    getUserListings(){
        this.carService.getCarsByUsername(this.user.username).subscribe((res:any) => {
            this.listingsCreatedByUser = res.content;
        })
    }

    getUserFavourites(){
        this.carService.getUsersFAvouriteCars(this.user.id).subscribe((res:any) => {
            this.favouriteListings = res.content;
        })
    }

    openDeleteModal(post) {
        this.dialogRef = this.dialog.open(this.deleteCarModal, {
            width: '500px',
            disableClose: true
        });
    }

    deleteCarPost() {
        this.carService.deleteCar(this.carToBeDeleted).subscribe(res => {
            this.getUserListings();
            this.closeDialog();
        })
    }

    handleItemEvent(event) {
        switch (event.type) {
            case "delete": {
                this.bottomSheet.open(this.bottomSheetContent)
                // this.carToBeDeleted = event.target;
                // this.openDeleteModal(event.target);
            }
        }
    }

    closeDialog() {
        this.bottomSheet.dismiss();
    }


}
