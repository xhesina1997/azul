import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../auth/authentication.service";
import {MatBottomSheet, MatSnackBar} from "@angular/material";
import {AngularFirestore} from "@angular/fire/firestore";
import {Subject} from "rxjs/Subject";
import {map, take, takeUntil} from "rxjs/operators";

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit, OnDestroy {

    constructor(private authenticationService: AuthenticationService,
                private snackBar: MatSnackBar,
                private bottomSheet: MatBottomSheet,
                private _firestore: AngularFirestore) {
    }

    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        this.getAllCars();
    }

    ngOnDestroy() {
        this.stopSubscriptions.next();
    }

    @ViewChild('filters') filters: any;
    protected view;
    protected user = this.authenticationService.user;
    protected stopSubscriptions = new Subject();

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : this.view = 'mobile';
    }

    protected sort = 'latest';
    protected cars: any;
    protected queryOptions = {
        page: 0,
        size: 6,
        total: 0,
        sort: 'created',
        direction: 'desc',
        filters: null
    };

    protected filterIcons = {
        manufacturer: 'build',
        model: 'merge_type',
        structure: 'directions_car',
        color: 'invert_colors',
        transmission: 'commute',
        city: 'map',
        plateRegistration: 'style',
        fuel: 'category',
        value: 'attach_money',
        year: 'calendar_today'
    };

    private getAllCars() {
        this._firestore.collection("cars", ref => ref.limit(this.queryOptions.size).orderBy(this.queryOptions.sort, this.queryOptions.direction))
            .snapshotChanges().pipe(map(carDocument => {
                return carDocument.map(cd => {
                    const data = cd.payload.doc.data();
                    const id = cd.payload.doc.id;
                    return { id, ...data };
                })
        })).subscribe(res => {
            console.log(res);
            this.cars = res
        })

    }

    filtersChanged(filters) {
        Object.entries(filters).length == 0 ? this.queryOptions.filters = null : this.queryOptions.filters = filters;
        // this.getALlCars();
    }

    removeFilter(filterKey) {
        delete this.queryOptions.filters[filterKey];
        Object.entries(this.queryOptions.filters).length == 0 ? this.queryOptions.filters = null : {};
        this.getAllCars();
    }

    changedQueryOptions(event) {
        console.log(event);
        this.queryOptions.page = event.pageIndex;
        this.queryOptions.size = event.pageSize;
        this.getAllCars();
    }

    changedSort(event) {
        if (event == 'latest') {
            this.queryOptions.sort = 'created';
            this.queryOptions.direction = 'ASC';
        } else if (event == 'price-l') {
            this.queryOptions.sort = 'price.value';
            this.queryOptions.direction = 'ASC';
        } else if (event == 'price-h') {
            this.queryOptions.sort = 'price.value';
            this.queryOptions.direction = 'DESC';
        }
        this.getAllCars();
    }

    addUserWhoFavourite(car) {
        if (this.authenticationService.isLoggedIn) {
            const previousEntry = car.userEmailsWhoFavourite.find(email => {
                return email == this.authenticationService.user.email
            });
            console.log(previousEntry);
            if(previousEntry != this.authenticationService.user.email || previousEntry == null){
                car.userEmailsWhoFavourite.push(this.authenticationService.user.email);
                this._firestore.collection('cars').doc(car.id).set(car)
                    .then(res => {
                        this.snackBar.open('Listing added to favourites.', null, {duration: 1500})
                    }, error => {
                        this.snackBar.open('There was an error', null, {duration: 1500})
                    });
            }else{
                this.snackBar.open('Listing already added to favourites', null, {duration: 1500})
            }

        } else {
            this.snackBar.open('You need te be logged in to add to favourites', 'log in', {duration: 2000})
        }
    }

    handileItemEvent(event) {
        switch (event.type) {
            case "favourite": {
                this.addUserWhoFavourite(event.target);
            }
        }
    }

    toggleFilters() {
        this.bottomSheet.open(this.filters);
    }

    fireSearch() {
        this.getAllCars();
        this.bottomSheet.dismiss();
    }
}
