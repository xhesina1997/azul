import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute,
                private _firestore: AngularFirestore) {
    }

    protected env = environment;

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

    protected selectedCar : any = {};

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this._firestore.collection('cars', ref => ref.where('uuid', '==', params.id).limit(1))
                .valueChanges()
                .subscribe(res => this.selectedCar = res[0])
        })
    }

}
