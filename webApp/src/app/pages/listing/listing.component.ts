import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/Subject";
import {Location} from "@angular/common";
import {PaginationService} from "../../services/pagination.service";

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {

    constructor(private activatedRoute: ActivatedRoute,
                private location: Location,
                private paginationService: PaginationService,
                private router: Router,
                private _fireStore: AngularFirestore) {

    }

    protected env = environment;
    protected descriptionToggle = true;
    customOptions: any = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        center: true,
        navSpeed: 700,
        nav: false,
        // navText: ['previous', 'next'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
    }
    protected selectedCar: any = {};
    protected stopSubscriptions = new Subject();

    public similarCars: any[] = [];

    protected view;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }

    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.id != null) {
                if (this.paginationService.selectedListing != null && this.paginationService.selectedListing.uuid == params.id) {
                    console.log("got listing from service");
                    this.selectedCar = this.paginationService.selectedListing;
                    this.getSimilarCars(this.selectedCar);
                    this.selectedCar.images == null ? this.selectedCar.images = [{url: '/assets/illustrations/placeholder.jpg'}] : {};
                } else {
                    console.log("got listing from backend");
                    this._fireStore.collection('cars', ref => ref.where('uuid', '==', params.id).limit(1))
                        .valueChanges()
                        .pipe(takeUntil(this.stopSubscriptions)).subscribe(res => {
                        this.selectedCar = res[0];
                        this.getSimilarCars(this.selectedCar);
                        this.selectedCar.images == null ? this.selectedCar.images = [{url: '/assets/illustrations/placeholder.jpg'}] : {};
                        // this.stopSubscriptions.next();
                    })
                }
            }
        })
    }

    ngOnDestroy() {
        this.stopSubscriptions.next();
        this.stopSubscriptions.complete();
    }

    goBack() {
        this.location.back();
    }

    private getSimilarCars(selectedCar: any): void {
        this._fireStore
            .collection('cars', ref =>
                ref.where('manufacturer', '==', selectedCar.manufacturer)
                    .where('model', '==', selectedCar.model)
                    .limit(4)
            )
            .valueChanges()
            .pipe(takeUntil(this.stopSubscriptions)).subscribe(res => {
            if (res != null) {
                res.forEach((car: any) => {
                    if (car.images == null) {
                        car.images = [{url: '/assets/illustrations/placeholder.jpg'}];
                    }
                })
            }
            this.similarCars = res.filter((car: any) => (car.uuid != selectedCar.uuid));
        })
    }

    handleItemEvent(event) {
      if (event != null) {
          this.router.navigate(['/mobile/listing'], {queryParams: {id: event.target.uuid}})
      }
    }
}
