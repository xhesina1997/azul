import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from "../../auth/authentication.service";
import {MatBottomSheet, MatDialog} from "@angular/material";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil, map} from "rxjs/operators";
import {Subject} from "rxjs";

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
    private unSubscribeSubject: Subject<any> = new Subject();


    protected carToBeDeleted: any;
    constructor(private _fireStore: AngularFirestore,
                private bottomSheet: MatBottomSheet,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        AuthenticationService.loginSubject
            .pipe(takeUntil(this.unSubscribeSubject))
            .subscribe(user => {
                if (user) {
                    this.user = user;
                    this.getUserListings();
                    this.getUserFavourites();
                }
            })
    }

    handleIndexChange(index) {
        this.displayed = index;
    }

    ngOnDestroy() {
        this.unSubscribeSubject.next();
        this.unSubscribeSubject.complete();
    }

    getUserListings(){
        this._fireStore.collection('cars', ref => ref.where('user.email', '==', this.user.email))
        .snapshotChanges().pipe(map((arr: any) => {
            return arr.map(snap => {
                const data = snap.payload.doc.data();
                const doc = snap.payload.doc;
                return {...data, doc}
            });
        })).pipe(takeUntil(this.unSubscribeSubject))    
        // .valueChanges()
        //     .subscribe(res => {
        //         this.listingsCreatedByUser = res;
        //     })
    }

    getUserFavourites(){
        this._fireStore.collection('cars', ref => ref.where('userEmailsWhoFavourite', 'array-contains', this.user.email))
            .valueChanges()
            .subscribe(res => {
                this.favouriteListings = res;
            })
    }

    openDeleteModal(post) {
        this.dialogRef = this.dialog.open(this.deleteCarModal, {
            width: '500px',
            disableClose: true
        });
    }

    deleteCarPost() {
        console.log(this.carToBeDeleted);
        this._fireStore.collection('cars').doc(this.carToBeDeleted.uuid).delete()
    }

    handleItemEvent(event) {
        switch (event.type) {
            case "delete": {
                this.bottomSheet.open(this.bottomSheetContent)
                this.carToBeDeleted = event.target;
                // this.openDeleteModal(event.target);
            }
        }
    }

    closeDialog() {
        this.bottomSheet.dismiss();
    }


}
