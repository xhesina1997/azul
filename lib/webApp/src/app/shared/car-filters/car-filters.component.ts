import {Component, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Component({
    selector: 'car-filters',
    templateUrl: './car-filters.component.html',
    styleUrls: ['./car-filters.component.scss']
})
export class CarFiltersComponent implements OnInit {

    constructor() {}
    ngOnInit() {}

    @Output() filtersListener = new Subject();

    protected filters: any = {};
    protected manufacturer: any;
    protected model: any;

    changedFilters(filter, event) {
        this.filters[filter] = event.value;
        this.filtersListener.next(this.filters);
    }

    clearFilter(filter) {
        delete this.filters[filter];
        this.filtersListener.next(this.filters);
    }


    //==============SLIDERS===============//
    protected minValue: number = 50;
    protected maxValue: number = 100;
    protected options = {
        floor: 0,
        ceil: 200
    };

}
