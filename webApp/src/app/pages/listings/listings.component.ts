import {Component, HostListener, OnDestroy, OnInit, ViewChild, HostBinding, ChangeDetectorRef} from '@angular/core';
import {AuthenticationService} from "../../auth/authentication.service";
import {MatBottomSheet, MatSnackBar} from "@angular/material";
import {AngularFirestore, AngularFirestoreCollection, CollectionReference, Query} from "@angular/fire/firestore";
import {Subject} from "rxjs/Subject";
import {filter, map, pairwise, take, takeUntil} from "rxjs/operators";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {PaginationService} from "../../services/pagination.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ActivatedRoute, NavigationEnd, Router, RoutesRecognized} from "@angular/router";
import * as firebase from 'firebase/app'
import {Location} from "@angular/common";

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
                private location: Location,
                private changeDetector: ChangeDetectorRef,
                private paginationService: PaginationService) {

    }

    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        this.vsViewport.elementScrolled().subscribe(res => {
            this.vsViewport.measureScrollOffset('bottom') == 0 ? this.paginationService.handleScroll() : {};
        });
    }

    ngAfterViewInit() {

        if(this.paginationService.needsScroll){
            setTimeout(() => {
            this.vsViewport.scrollToOffset(this.paginationService.scrollHeight);
            }, 1);
        }

        this.route.queryParams.pipe(takeUntil(this.stopQuerySubscription)).subscribe(params => {

            if (this.paginationService.listings.length == 0) {
                if (Object.entries(params).length != 0) {
                    this.paginationService.queryOptions.filters = {...params};
                    this.paginationService.getInitialData();
                } else {
                    this.paginationService.getInitialData();
                }
            }
            this.stopQuerySubscription.next();
        });
    }

    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }

    ngOnDestroy() {
        // this.paginationService.closeSubscriptions();
    }

    @ViewChild('filters') filters: any;
    @ViewChild('vsViewport') vsViewport: CdkVirtualScrollViewport;
    protected view;
    protected user = this.authenticationService.user;
    protected stopQuerySubscription = new Subject();

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
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

    filtersChanged(filters){
        Object.entries(filters).length == 0 ? this.paginationService.queryOptions.filters = null : this.paginationService.queryOptions.filters = filters;
        console.log(this.paginationService.queryOptions.filters);
        this.router.navigate(['/mobile/search'], {queryParams: filters})
    }

    sortChanged(event){
        this.paginationService.queryOptions.sort = event.sort;
        this.paginationService.queryOptions.reverse = event.reverse;
    }

    removeFilter(filterKey) {
        delete this.paginationService.queryOptions.filters[filterKey];
        Object.entries(this.paginationService.queryOptions.filters).length == 0 ? this.paginationService.queryOptions.filters = null : {};
        this.router.navigate(['/mobile/search'], {queryParams: this.paginationService.queryOptions.filters});
        this.fireSearch()
    }

    addUserWhoFavourite(car) {
        if (this.authenticationService.isLoggedIn) {
            car.userEmailsWhoFavourite == null ? car.userEmailsWhoFavourite = [] : {};
            const previousEntry = car.userEmailsWhoFavourite.find(email => {
                return email == this.authenticationService.user.email
            });
            if (previousEntry != this.authenticationService.user.email || previousEntry == null) {
                car.userEmailsWhoFavourite.push(this.authenticationService.user.email);
                let carWithoutDoc = {...car};
                delete carWithoutDoc.doc;
                this._fireStore.collection('cars').doc(car.doc.id).set(carWithoutDoc)
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
            case "favourite":
                this.addUserWhoFavourite(event.target);
                break;
            case "open":
                this.openListing(event.target);
                break;
        }
    }

    openListing(target) {
        this.paginationService.scrollHeight = this.vsViewport.measureScrollOffset("top");
        this.paginationService.selectedListing = target;
        this.router.navigate(['/mobile/listing'], {queryParams: {id: target.uuid}})
    }

    toggleFilters() {
        this.bottomSheet.open(this.filters);
    }

    fireSearch() {
        this.paginationService.done.next(false);
        this.paginationService.listings = [];
        this.paginationService.getInitialData();

        this.bottomSheet.dismiss();
    }
}
