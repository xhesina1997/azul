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
    public manufacturer: any;

    changedFilters(filter, event) {
        this.filters[filter] = event.value;
        this.filtersListener.next(this.filters);
    }

    clearFilter(filter, model) {
        delete this.filters[filter];
        model = undefined;
        this.filtersListener.next(this.filters);
    }

}
