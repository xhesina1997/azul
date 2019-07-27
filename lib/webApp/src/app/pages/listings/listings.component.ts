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

    protected sort = 'latest';

    protected cars: any;
    protected queryOptions = {
        page: 0,
        size: 5,
        total: 0,
        sort: 'created',
        direction: 'DESC',
        filters: {}
    };

    ngOnInit() {
        this.getALlCars();
    }

    private getALlCars(){
        let params = new HttpParams()
            .set('page', String(this.queryOptions.page))
            .append('size', String(this.queryOptions.size))
            .append('sort', String(this.queryOptions.sort + ',' + this.queryOptions.direction));

        if(this.queryOptions.filters != {}){
            for(let filter in this.queryOptions.filters){
                if(filter == 'value'){
                    !this.queryOptions.filters[filter][0] ? this.queryOptions.filters[filter][0] = 0 : {};
                    !this.queryOptions.filters[filter][1] ? this.queryOptions.filters[filter][1] = 100000000000 : {};
                    params = params.set('price.value', this.queryOptions.filters[filter][0]).append('price.value', this.queryOptions.filters[filter][1])
                }else if(filter == 'year'){
                    !this.queryOptions.filters[filter][0] ? this.queryOptions.filters[filter][0] = 0 : {};
                    !this.queryOptions.filters[filter][1] ? this.queryOptions.filters[filter][1] = 10000 : {};
                    params = params.set('year', this.queryOptions.filters[filter][0]).append('year', this.queryOptions.filters[filter][1])
                }else{
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
        console.log(filters);
        this.queryOptions.filters = filters;
        this.getALlCars();
    }

    changedQueryOptions(event){
        console.log(event);
        this.queryOptions.page = event.pageIndex;
        this.queryOptions.size = event.pageSize;
        this.getALlCars();
    }

    changedSort(event){
        if(event == 'latest') {
            this.queryOptions.sort = 'created';
            this.queryOptions.direction = 'DESC';
        } else if(event == 'price-l') {
            this.queryOptions.sort = 'price.value';
            this.queryOptions.direction = 'ASC';
        } else if(event == 'price-h') {
            this.queryOptions.sort = 'price.value';
            this.queryOptions.direction = 'DESC';
        }
        this.getALlCars();
    }
}
