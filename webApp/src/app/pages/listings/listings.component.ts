import {Component, HostListener, OnDestroy, OnInit, ViewChild, HostBinding} from '@angular/core';
import {AuthenticationService} from "../../auth/authentication.service";
import {MatBottomSheet, MatSnackBar} from "@angular/material";
import {AngularFirestore} from "@angular/fire/firestore";
import {Subject} from "rxjs/Subject";
import {map, take, takeUntil} from "rxjs/operators";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {PaginationService} from "../../services/pagination.service";

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit, OnDestroy {

    constructor(private authenticationService: AuthenticationService,
                private snackBar: MatSnackBar,
                private bottomSheet: MatBottomSheet,
                public paginationService: PaginationService,
                private _fireStore: AngularFirestore) {
    }

    ngOnInit() {
        this.paginationService.init('cars', 'created');
        // this.paginationService.data.subscribe(res => {
        //     console.log(res);
        //     if(res.length > 0){
        //         if(this.cars == null){
        //             this.cars = res;
        //         }else{
        //             res.forEach(item => {
        //                 this.cars.push(item);
        //             })
        //         }
        //     }
        //     console.log(this.cars);
        // });
        window.dispatchEvent(new Event('resize'));

        this.vsViewport.elementScrolled().subscribe(res => {
            this.vsViewport.measureScrollOffset('bottom') == 0 ? this.handleScroll() : {};
        });
    }

    ngOnDestroy() {
        this.stopSubscriptions.next();
    }

    @ViewChild('filters') filters: any;
    @ViewChild('vsViewport') vsViewport: CdkVirtualScrollViewport;
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
        size: 5,
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

    // private getAllCars() {
    //     this._fireStore
    //         .collection("cars", ref => ref.limit(this.queryOptions.size + 1)
    //         .orderBy(this.queryOptions.sort, 'desc'))
    //         .snapshotChanges()
    //         .pipe(map(carDocument => {
    //             if(!this.reachedTheEnd){
    //                 this.nextRef = carDocument[carDocument.length - 1].payload.doc.ref;
    //                 return carDocument.slice(0, this.queryOptions.size);
    //             }else{
    //                 this.reachedTheEnd = true;
    //                 return carDocument;
    //             }
    //         }))
    //         .pipe(map(carDocument => {
    //             return carDocument.map(cd => {
    //                 const data = cd.payload.doc.data();
    //                 const id = cd.payload.doc.id;
    //                 return {id, ...data};
    //             })
    //         }))
    //         .pipe(take(1))
    //         .subscribe(res => {
    //             this.cars = res
    //         })
    //
    // }

    filtersChanged(filters) {
        Object.entries(filters).length == 0 ? this.queryOptions.filters = null : this.queryOptions.filters = filters;
        // this.getALlCars();
    }

    removeFilter(filterKey) {
        delete this.queryOptions.filters[filterKey];
        Object.entries(this.queryOptions.filters).length == 0 ? this.queryOptions.filters = null : {};
        // this.getAllCars();
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
        // this.getAllCars();
    }

    addUserWhoFavourite(car) {
        if (this.authenticationService.isLoggedIn) {
            const previousEntry = car.userEmailsWhoFavourite.find(email => {
                return email == this.authenticationService.user.email
            });
            console.log(previousEntry);
            if (previousEntry != this.authenticationService.user.email || previousEntry == null) {
                car.userEmailsWhoFavourite.push(this.authenticationService.user.email);
                this._fireStore.collection('cars').doc(car.id).set(car)
                    .then(res => {
                        this.snackBar.open('Listing added to favourites.', null, {duration: 1500})
                    }, error => {
                        this.snackBar.open('There was an error', null, {duration: 1500})
                    });
            } else {
                this.snackBar.open('Listing already added to favourites', null, {duration: 1500})
            }

        } else {
            this.snackBar.open('You need te be logged in to add to favourites', 'log in', {duration: 2000})
        }
    }

    handleItemEvent(event) {
        switch (event.type) {
            case "favourite": {
                this.addUserWhoFavourite(event.target);
            }
        }
    }

    handleScroll(){
        this.paginationService.more();
    }

    toggleFilters() {
        this.bottomSheet.open(this.filters);
    }

    fireSearch() {
        // this.getAllCars();
        this.bottomSheet.dismiss();
    }
}
