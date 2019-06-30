import {Component, OnInit} from '@angular/core';
import {CarService} from "../../api/car.service";

@Component({
    selector: 'app-listings',
    templateUrl: './listings.component.html',
    styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

    constructor(private carService: CarService) {
    }

    protected cars: any;

    ngOnInit() {
        this.getALlCars();
    }

    private getALlCars(){
        this.carService.getAllCars().subscribe(res => {
            this.cars = res;
            // console.log(this.cars);
        });
    }

}
