import {Component, OnInit, ViewChild} from "@angular/core";
import {AuthenticationService} from "../../auth/authentication.service";
import {MatBottomSheet, MatDialog} from "@angular/material";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil, map} from "rxjs/operators";
import {Subject} from "rxjs";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
    selector: "app-account",
    templateUrl: "./account.component.html",
    styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {
    @ViewChild("deleteCarModal") deleteCarModal: any;
    @ViewChild("bottomSheet") bottomSheetContent: any;
    protected user;
    public dialogRef: any;
    protected displayed = 0;
    protected listingsCreatedByUser: any[] = [];
    protected favouriteListings: any[] = [];
    private unSubscribeAuthSubject: Subject<any> = new Subject();
    private unSubscribeUserListingsSubject: Subject<any> = new Subject();
    private unSubscribeFavouritesSubject: Subject<any> = new Subject();

    protected carToBeDeleted: any;

    constructor(
        private _fireStore: AngularFirestore,
        private bottomSheet: MatBottomSheet,
        private authenticationService: AuthenticationService,
        public dialog: MatDialog,
        private _storage: AngularFireStorage
    ) {
    }

    ngOnInit() {
        AuthenticationService.loginSubject
            .pipe(takeUntil(this.unSubscribeAuthSubject))
            .subscribe(user => {
                if (user) {
                    this.user = user;
                    this.getUserListings();
                    this.getUserFavourites();
                }
            });
    }

    handleIndexChange(index) {
        this.displayed = index;
    }

    ngOnDestroy() {
        this.unSubscribeFavouritesSubject.complete();
        this.unSubscribeUserListingsSubject.complete();
        this.unSubscribeAuthSubject.complete();
    }

    getUserListings() {
        this._fireStore
            .collection("cars", ref => ref.where("user.email", "==", this.user.email))
            .snapshotChanges()
            .pipe(
                map((arr: any) => {
                    return arr.map(snap => {
                        const data = snap.payload.doc.data();
                        const doc = snap.payload.doc;
                        return {...data, doc};
                    });
                })
            )
            .pipe(takeUntil(this.unSubscribeUserListingsSubject))
            .subscribe(res => {
                this.listingsCreatedByUser = res;
                this.unSubscribeUserListingsSubject.next();
            });
    }

    getUserFavourites() {
        this._fireStore
            .collection("cars", ref =>
                ref.where("userEmailsWhoFavourite", "array-contains", this.user.email)
            )
            .valueChanges()
            .pipe(takeUntil(this.unSubscribeFavouritesSubject))
            .subscribe(res => {
                this.favouriteListings = res;
                this.unSubscribeFavouritesSubject.next();
            });
    }

    openDeleteModal(post) {
        this.dialogRef = this.dialog.open(this.deleteCarModal, {
            width: "500px",
            disableClose: true
        });
    }

    deleteCarPost() {
        console.log(this.carToBeDeleted);
        this._fireStore
            .collection("cars")
            .doc(this.carToBeDeleted.doc.id)
            .delete()
            .then(() => {
                let imagesToDelete = [...this.carToBeDeleted.images];
                imagesToDelete.forEach(image => {
                    this._storage.ref(this.carToBeDeleted.uuid + '/' + image.name).delete();
                })
                this.getUserListings();
                this.closeDialog();
            });
    }

    handleItemEvent(event) {
        switch (event.type) {
            case "delete": {
                this.bottomSheet.open(this.bottomSheetContent);
                this.carToBeDeleted = event.target;
                // this.openDeleteModal(event.target);
            }
        }
    }

    closeDialog() {
        this.bottomSheet.dismiss();
    }

    logout() {
        this.authenticationService.logout();
    }
}
