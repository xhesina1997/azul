import {Component, OnInit} from '@angular/core';
import {CarService} from "../../api/car.service";
import {HttpParams} from "@angular/common/http";

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

    constructor(private carService: CarService) {
    }

    protected cars: any;
    protected queryOptions = {
        page: 0,
        size: 5,
        total: 0,
        filters: {}
    };

    ngOnInit() {
        this.getALlCars();
    }

    private getALlCars(){
        let params = new HttpParams().set('page', String(this.queryOptions.page)).append('size', String(this.queryOptions.size));

        if(this.queryOptions.filters != {}){
            for(let filter in this.queryOptions.filters){
                if (this.queryOptions.filters.hasOwnProperty(filter)) {
                    params = params.set(filter, this.queryOptions.filters[filter]);
                }
            }
        }

        this.carService.searchCars(params).subscribe((data: any) => {
            this.cars = data.content;
            this.queryOptions.total = data.totalElements;
        });
    }

    filtersChanged(filters){
        this.queryOptions.filters = filters;
        this.getALlCars();
    }

    changedQueryOptions(event){
        console.log(event);
        this.queryOptions.page = event.pageIndex;
        this.queryOptions.size = event.pageSize;
        this.getALlCars();
    }

}
