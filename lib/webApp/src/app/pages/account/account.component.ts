import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from "../../auth/authentication.service";
import { CarService } from "../../api/car.service";
import { MatDialog } from "@angular/material";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    @ViewChild('deleteCarModal') deleteCarModal: any;
    protected user;
    public dialogRef: any;
    protected displayed = 0;
    protected listingsCreatedByUser: any[] = [];

    protected carToBeDeleted: any;
    constructor(private _authService: AuthenticationService, private carService: CarService, public dialog: MatDialog) {
        this.user = this._authService.user;
    }

    ngOnInit() {
        this.getUserListings();
    }

    handleIndexChange(index) {
        this.displayed = index;
    }

    getUserListings(){
        this.carService.getCarsByUsername(this.user.username).subscribe((res:any) => {
            this.listingsCreatedByUser = res.content;
            console.log(res);
            
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
    handleRequest(event) {
        switch (event.type) {
            case "delete": {
                this.carToBeDeleted = event.target
                this.openDeleteModal(event.target);
            }
        }
    }

    closeDialog() {
        if (this.dialogRef != null) {
            this.dialogRef.close();
        }
    }


}
