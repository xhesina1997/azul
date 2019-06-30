import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../api/car.service";

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute,
                private carService: CarService) {
    }

    customOptions: any = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
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
            this.carService.getCarByUUID(params.id).subscribe(res => {
                this.selectedCar = res;
            })
        })
    }

}
