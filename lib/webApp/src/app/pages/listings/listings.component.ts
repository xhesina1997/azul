import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from "../../api/car.service";
import {HttpParams} from "@angular/common/http";
import {AuthenticationService} from "../../auth/authentication.service";
import {MatBottomSheet, MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

    constructor(private carService: CarService,
                private authenticationService: AuthenticationService,
                private snackBar: MatSnackBar,
                private bottomSheet: MatBottomSheet) {
    }

    @ViewChild('filters') filters: any;

    protected sort = 'latest';
    protected cars: any;
    protected queryOptions = {
        page: 0,
        size: 5,
        total: 0,
        sort: 'created',
        direction: 'DESC',
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
    }

    ngOnInit() {
        this.getALlCars();
    }

    private getALlCars() {
        let params = new HttpParams()
            .set('page', String(this.queryOptions.page))
            .append('size', String(this.queryOptions.size))
            .append('sort', String(this.queryOptions.sort + ',' + this.queryOptions.direction));

        if (this.queryOptions.filters != null) {
            for (let filter in this.queryOptions.filters) {
                if (filter == 'value') {
                    !this.queryOptions.filters[filter][0] ? this.queryOptions.filters[filter][0] = 0 : {};
                    !this.queryOptions.filters[filter][1] ? this.queryOptions.filters[filter][1] = 100000000000 : {};
                    params = params.set('price.value', this.queryOptions.filters[filter][0]).append('price.value', this.queryOptions.filters[filter][1])
                } else if (filter == 'year') {
                    !this.queryOptions.filters[filter][0] ? this.queryOptions.filters[filter][0] = 0 : {};
                    !this.queryOptions.filters[filter][1] ? this.queryOptions.filters[filter][1] = 10000 : {};
                    params = params.set('year', this.queryOptions.filters[filter][0]).append('year', this.queryOptions.filters[filter][1])
                } else {
                    params = params.set(filter, this.queryOptions.filters[filter]);
                }
            }
        }

        this.carService.searchCars(params).subscribe((data: any) => {
            this.cars = data.content;
            if(this.authenticationService.user != null){
                this.cars.forEach(car => {
                    car.usersWhoFavourite.forEach(userId => {
                        if(this.authenticationService.user.id == userId) car.favouritedByUser = true;
                    })
                })
            }
            this.queryOptions.total = data.totalElements;
        });
    }

    filtersChanged(filters) {
        console.log(filters);
        Object.entries(filters).length == 0 ? this.queryOptions.filters = null : this.queryOptions.filters = filters;
        // this.getALlCars();
    }

    removeFilter(filterKey) {
        delete this.queryOptions.filters[filterKey];
        Object.entries(this.queryOptions.filters).length == 0 ? this.queryOptions.filters = null : {};
        this.getALlCars();
    }

    changedQueryOptions(event) {
        console.log(event);
        this.queryOptions.page = event.pageIndex;
        this.queryOptions.size = event.pageSize;
        this.getALlCars();
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
        this.getALlCars();
    }

    addUserWhoFavourite(car) {
        if (this.authenticationService.isAuthenticated()) {
            this.carService.addUserWhoFavourite(this.authenticationService.user.id, car.id).subscribe(res => {
                    car.favouritedByUser = true;
                    this.snackBar.open('Listing added to favourites.', null, {duration: 1500})
                }
            )
        }else {
            this.snackBar.open('You need te be logged in to add to favourites', 'log in', {duration: 2000})
        }
    }

    handileItemEvent(event){
        switch (event.type) {
            case "favourite": {
                this.addUserWhoFavourite(event.target);
            }
        }
    }

    toggleFilters() {
        this.bottomSheet.open(this.filters);
    }
}
