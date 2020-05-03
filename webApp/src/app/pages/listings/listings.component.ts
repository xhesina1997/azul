import {
    Component,
    HostListener,
    OnDestroy,
    OnInit,
    ViewChild,
    HostBinding,
    ChangeDetectorRef,
    AfterViewInit
} from '@angular/core';
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
import {CarFiltersComponent} from "../../shared/car-filters/car-filters.component";
import {SeoService} from "../../services/seo.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.scss'],
    animations: [
        trigger('toggleBackToTop', [
            state('initial', style({
                bottom: '-20px'
            })),
            state('final', style({
                bottom: '8px'
            })),
            transition('initial=>final', animate('100ms')),
            transition('final=>initial', animate('100ms'))
        ]),
    ]
})
export class ListingsComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('carFilters') carFilters: CarFiltersComponent;
    public currentBackToTopState = 'initial';

    constructor(private authenticationService: AuthenticationService,
                private snackBar: MatSnackBar,
                private bottomSheet: MatBottomSheet,
                private _fireStore: AngularFirestore,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location,
                private changeDetector: ChangeDetectorRef,
                protected paginationService: PaginationService,
                private seo: SeoService) {
        seo.setSeoTags(
            'Kerko Makina | YouScout | Mercedes-Benz, Volkswagen, BMW, Audi | youscout.net',
            'https://youscout.net/assets/illustrations/meta-img.png',
            'Makina ne shitje, makina te perdorura, tregu me i madh ku mund te gjej makina youscout.net kambio automatike, shitblerje makinash vetura ne kosove makina ne gjermani okazion makina tirane shkoder durres kavaje korce elbasan fier vlore lushnje',
            'makina ne shitje, makina te perdorura, youscout.net, kambio automatike, shitblerje makinash, merrjep, vetura ne kosove, makina ne gjermani, okazion, makina, tirane, shkoder, durres, kavaje, korce, elbasan, fier, vlore, lushnje',
            'http://youscout.net/mobile/search'
        );
    }

    ngOnInit() {
        window.dispatchEvent(new Event('resize'));

    }

    ngAfterViewInit() {

        this.vsViewport.elementScrolled().subscribe(res => {
            this.vsViewport.measureScrollOffset('bottom') == 0 ? this.paginationService.handleScroll() : {};
            // if(this.vsViewport.measureScrollOffset('top') < 10) {
            //     this.hideBackToTopButton();
            // } else {
            //     this.showBackToTopButton();
            // }
        });

        if (this.paginationService.needsScroll) {
            setTimeout(() => {
                this.vsViewport.scrollToOffset(this.paginationService.scrollHeight);
            }, 1);
        }

        this.route.queryParams.pipe(takeUntil(this.stopQuerySubscription)).subscribe(params => {

            if (this.paginationService.listings.length == 0 ||
                !this.isEquivalent(this.paginationService.queryOptions.filters == null ? {} : this.paginationService.queryOptions.filters, params == null ? {} : params)) {
                if (Object.entries(params).length != 0) this.paginationService.queryOptions.filters = {...params};
                else this.paginationService.queryOptions.filters = null;
                this.paginationService.done.next(false);
                this.paginationService.listings = [];
                this.paginationService.getInitialData();
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
    view;
    user = this.authenticationService.user;
    stopQuerySubscription = new Subject();

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }


    filterIcons = {
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
        Object.entries(filters).length == 0 ? this.paginationService.queryOptions.filters = null : this.paginationService.queryOptions.filters = filters;
        console.log(this.paginationService.queryOptions.filters);
        this.router.navigate(['/mobile/search'], {queryParams: filters})
    }

    sortChanged(event) {
        console.log(event);
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
;        if (this.authenticationService.isLoggedIn) {
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

    isEquivalent(a, b) {
        // Create arrays of property names
        let aProps = Object.getOwnPropertyNames(a);
        let bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    scrollToTop(){
        this.vsViewport.scrollToIndex(0);
    }

    showBackToTopButton(){
        if(this.currentBackToTopState === 'initial'){
            this.currentBackToTopState = 'final'
        }
    }

    hideBackToTopButton(){
        if(this.currentBackToTopState === 'final') {
            this.currentBackToTopState = 'initial'
        }
    }

}
