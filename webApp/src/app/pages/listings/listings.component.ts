import {Component, HostListener, OnDestroy, OnInit, ViewChild, HostBinding, ChangeDetectorRef} from '@angular/core';
import {AuthenticationService} from "../../auth/authentication.service";
import {MatBottomSheet, MatSnackBar} from "@angular/material";
import {AngularFirestore, AngularFirestoreCollection, CollectionReference, Query} from "@angular/fire/firestore";
import {Subject} from "rxjs/Subject";
import {map, take, takeUntil} from "rxjs/operators";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {PaginationService} from "../../services/pagination.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit, OnDestroy {

    constructor(private authenticationService: AuthenticationService,
                private snackBar: MatSnackBar,
                private bottomSheet: MatBottomSheet,
                private _fireStore: AngularFirestore,
                private router: Router,
                private route: ActivatedRoute,
                private changeDetector : ChangeDetectorRef) {
    }

    ngOnInit() {
        this.done.next(false);
        this.loading.next(false);



        window.dispatchEvent(new Event('resize'));
        this.vsViewport.elementScrolled().subscribe(res => {
            this.vsViewport.measureScrollOffset('bottom') == 0 ? this.handleScroll() : {};
        });
    }
    ngAfterViewInit() {
        this.route.queryParams.pipe(takeUntil(this.stopQuerySubscription)).subscribe(params => {
            if(Object.entries(params).length != 0){
                console.log(params)
                this.queryOptions.filters = {...params};
                this.getInitialData();
            }else{
                this.getInitialData();
            }

            this.stopQuerySubscription.next();

        });
    }
    ngAfterViewChecked(){
        this.changeDetector.detectChanges();
    }
    ngOnDestroy() {
        this.stopSubscriptions.next();
        this.stopSubscriptions.complete();
        this.done.complete();
        this.loading.complete();
    }

    @ViewChild('filters') filters: any;
    @ViewChild('vsViewport') vsViewport: CdkVirtualScrollViewport;
    protected view;
    protected listings = [];
    protected user = this.authenticationService.user;
    protected stopSubscriptions = new Subject();
    protected stopQuerySubscription = new Subject();
    protected done = new BehaviorSubject(false);
    protected loading = new BehaviorSubject(false);

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }

    protected queryOptions = {
        page: 0,
        size: 10,
        total: 0,
        sort: 'created',
        reverse: false,
        filters: null
    };

    addFilters(query: Query){
        console.log(this.queryOptions.filters);
        if (this.queryOptions.filters != null) {
            for(let filter in this.queryOptions.filters){
                console.log(filter);
                console.log(this.queryOptions.filters[filter]);
                query = query.where(filter, '==', this.queryOptions.filters[filter]);
            }
        }
        return query;
    }

    getInitialData() {
        let col = this._fireStore.collection('cars', ref => {
            let query: Query = ref;
            query = query.orderBy(this.queryOptions.sort, this.queryOptions.reverse ? 'asc' : 'desc');
            query = query.limit(this.queryOptions.size);
            query = this.addFilters(query);
            return query;
        });
        this.mapResponse(col);
    }

    handleScroll() {
        let col = this._fireStore.collection('cars', ref => {
            let query: Query = ref;
            query = query.orderBy(this.queryOptions.sort, this.queryOptions.reverse ? 'asc' : 'desc');
            query = query.limit(this.queryOptions.size);
            query = query.startAfter(this.listings[this.listings.length - 1].doc);
            query = this.addFilters(query);
            return query;
        });
        this.mapResponse(col);
    }

    mapResponse(collection: AngularFirestoreCollection) {
        if (this.done.value || this.loading.value) {
            return
        } else {
            this.loading.next(true);
            collection.snapshotChanges().pipe(map((arr: any) => {
                return arr.map(snap => {
                    const data = snap.payload.doc.data();
                    const doc = snap.payload.doc;
                    return {...data, doc}
                });
            })).pipe(takeUntil(this.stopSubscriptions)).subscribe(response => {
                if (response.length == 0) {
                    this.done.next(true);
                } else {
                    this.listings = this.listings.concat(response);
                    if(response.length < this.queryOptions.size) this.done.next(true);
                    console.log(this.listings);
                }
                this.loading.next(false);
                this.stopSubscriptions.next();
            });
        }
    }

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

    filtersChanged(filters) {
        console.log(filters);
        Object.entries(filters).length == 0 ? this.queryOptions.filters = null : this.queryOptions.filters = filters;
        this.router.navigate(['/mobile/search'], { queryParams: filters })


    }

    removeFilter(filterKey) {
        delete this.queryOptions.filters[filterKey];
        Object.entries(this.queryOptions.filters).length == 0 ? this.queryOptions.filters = null : {};
        // this.getAllCars();
    }

    changedSort(event) {
        // if (event == 'latest') {
        //     this.queryOptions.sort = 'created';
        //     this.queryOptions.direction = 'ASC';
        // } else if (event == 'price-l') {
        //     this.queryOptions.sort = 'price.value';
        //     this.queryOptions.direction = 'ASC';
        // } else if (event == 'price-h') {
        //     this.queryOptions.sort = 'price.value';
        //     this.queryOptions.direction = 'DESC';
        // }
        // this.getAllCars();
    }

    addUserWhoFavourite(car) {
        if (this.authenticationService.isLoggedIn) {
            const previousEntry = car.userEmailsWhoFavourite.find(email => {
                return email == this.authenticationService.user.email
            });
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

    toggleFilters() {
        this.bottomSheet.open(this.filters);
    }

    fireSearch() {
        // this.getAllCars();
        this.done.next(false);
        this.listings = [];
        this.getInitialData();

        this.bottomSheet.dismiss();
    }
}
