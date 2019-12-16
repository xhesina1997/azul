import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.id != null) {
                if (this.paginationService.selectedListing != null && this.paginationService.selectedListing.uuid == params.id) {
                    console.log("got listing from service");
                    this.selectedCar = this.paginationService.selectedListing;
                } else {
                    console.log("got listing from backend");
                    this._fireStore.collection('cars', ref => ref.where('uuid', '==', params.id).limit(1))
                        .valueChanges()
                        .pipe(takeUntil(this.stopSubscriptions)).subscribe(res => {
                        this.selectedCar = res[0];
                        this.stopSubscriptions.next();
                    })
                }
            }
        })
    }

    ngOnDestroy() {
        this.stopSubscriptions.complete();
    }

    goBack() {
        this.location.back();
    }

}
