import {Component, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {map, startWith} from "rxjs/operators";
import {CarService} from "../../api/car.service";
import {Observable} from "rxjs/index";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'car-filters',
    templateUrl: './car-filters.component.html',
    styleUrls: ['./car-filters.component.scss']
})
export class CarFiltersComponent implements OnInit {

    constructor(private carService: CarService,) {
    }

    ngOnInit() {
        this.getCarBrands();
        this.getCarModels();

        this.filteredCurrency = this.searchedCurrency.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.currencyList))
            );
        this.filteredManufacturer = this.searchedManufacturer.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.producerList))
            );
        this.filteredModels = this.searchedModel.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.modelList))
            )
        this.filteredCarTypes = this.searchedStructure.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filterCar(value, this.carTypes))
            );
        this.filteredYears = this.searchedYear.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.productionYear))
            );
        this.filteredColors = this.searchedColor.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.colors))
            )
        this.filteredKilometers = this.searchedMileage.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filterKm(value, this.kilometers))
            )
        this.filteredCities = this.searchedCity.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.cities))
            )
    }

    @Output() filtersListener = new Subject();

    protected filters: any = {};
    protected manufacturer: any;
    protected model: any;
    protected minValue: number;
    protected maxValue: number;
    protected minYear: number;
    protected maxYear: number;

    changedFilters(filter, event) {
        if(filter =="minPrice"){
            !this.filters.value ? this.filters.value = [] : {};
            this.filters.value[0] = event
        }else if(filter =="maxPrice"){
            !this.filters.value ? this.filters.value = [] : {};
            this.filters.value[1] = event
        }else if(filter =="minYear") {
            !this.filters.year ? this.filters.year = [] : {};
            this.filters.year[0] = event
        }else if(filter =="maxYear") {
            !this.filters.year ? this.filters.year = [] : {};
            this.filters.year[1] = event
        }else {
            this.filters[filter] = event;
            console.log(event);
            
        }
        this.filtersListener.next(this.filters);
    }

    clearFilter(filter) {
        delete this.filters[filter];
        this.filtersListener.next(this.filters);
    }


    //==============SLIDERS===============//
    protected options = {
        floor: 0,
        ceil: 200000
    };


    //===============LISTS================//
    selectedManufacturer: FormControl = new FormControl();
    selectedModel: FormControl = new FormControl();
    selectedStructure: FormControl = new FormControl();
    selectedColor: FormControl = new FormControl();
    selectedTransmission: FormControl = new FormControl();
    selectedFuel: FormControl = new FormControl();
    selectedPlateRegistration: FormControl = new FormControl();
    selectedCity: FormControl = new FormControl();
    searchedCurrency: FormControl = new FormControl();
    searchedManufacturer: FormControl = new FormControl();
    searchedModel: FormControl = new FormControl();
    searchedStructure: FormControl = new FormControl();
    searchedYear: FormControl = new FormControl();
    searchedColor: FormControl = new FormControl();
    searchedMileage: FormControl = new FormControl();
    searchedCity: FormControl = new FormControl();
    filteredCurrency: Observable<string[]>;
    filteredManufacturer: Observable<string[]>;
    filteredModels: Observable<string[]>;
    filteredCarTypes: Observable<string[]>;
    filteredYears: Observable<string[]>;
    filteredColors: Observable<string[]>;
    filteredKilometers: Observable<string[]>;
    filteredCities: Observable<string[]>;
    public currencyList: any[] = ['Euro'];
    public producerList: any = [];
    public modelList: any = [];
    disableModel:any = true;
    productionYear = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
    carTypes = [
        {
            name: 'micro',
            title: 'Micro',
            imageURL: 'assets/car-types/micro.png'
        },
        {
            name: 'hatchback',
            title: 'Hatchback',
            imageURL: 'assets/car-types/hatchback.png'
        },
        {
            name: 'coupe',
            title: 'Coupe',
            imageURL: 'assets/car-types/coupe.png'
        },
        {
            name: 'cabriolet',
            title: 'Cabriolet',
            imageURL: 'assets/car-types/cabriolet.png'
        },
        {
            name: 'sedan',
            title: 'Sedan',
            imageURL: 'assets/car-types/sedan.png'
        },
        {
            name: 'estate',
            title: 'Estate',
            imageURL: 'assets/car-types/crossover.png'
        },
        {
            name: 'roadster',
            title: 'Roadster',
            imageURL: 'assets/car-types/roadster.png'
        },
        {
            name: 'minivan',
            title: 'Minivan',
            imageURL: 'assets/car-types/minivan.png'
        },
        {
            name: 'crossover',
            title: 'Crossover',
            imageURL: 'assets/car-types/crossover.png'
        },
        {
            name: 'suv',
            title: 'Suv',
            imageURL: 'assets/car-types/suv.png'
        },
        {
            name: 'pickup',
            title: 'Pickup',
            imageURL: 'assets/car-types/pickup.png'
        },
        {
            name: 'van',
            title: 'Furgon',
            imageURL: 'assets/car-types/van.png'
        },
        {
            name: 'camper',
            title: 'Kamper',
            imageURL: 'assets/car-types/camper.png'
        },
        {
            name: 'smallTruck',
            title: 'Kamion i vogel',
            imageURL: 'assets/car-types/smalltruck.png'
        },
        {
            name: 'truck',
            title: 'Kamion',
            imageURL: 'assets/car-types/truck.png'
        },
        {
            name: 'bigTruck',
            title: 'Kamion i madh',
            imageURL: 'assets/car-types/bigtruck.png'
        }
    ];
    colors = ['E bardhe', 'E zeze', 'E hirit/gri', 'Kafe/bezhe', ' E kuqe', 'E verdhe', 'E gjelber', ' E kalter'];
    kilometers = [
        {
            title: '0 - 4,999 km',
            value: [0, 4999]
        },

    ];
    cities = ['Tirane', 'Fier', 'Lushnje', 'Korce', 'Pogradec', 'Durres', 'Berat', 'Sarande', 'Tropoje'];

    private _filter(value: string, list): string[] {
        const filterValue = value.toLowerCase();
        return list.filter(option => option.toLowerCase().includes(filterValue));
    }

    private _filterCar(value: string, list): string[] {
        const filterValue = value.toLowerCase();
        return list.filter(option => option.name.toLowerCase().includes(filterValue));
    }

    private _filterKm(value: string, list): string[] {
        const filterValue = value.toLowerCase();
        return list.filter(option => option.title.toLowerCase().includes(filterValue));
    }


    public carModelList: any;
    public carBrandsList: any;

    getCarBrands() {
        this.carService.getAllCarBrands().subscribe(data => {
            this.carBrandsList = data;
            this.carBrandsList.forEach(brand => {
                this.producerList.push(brand.name);
            });
            this.searchedManufacturer.setValue("");
        });
    }

    getCarModels() {
        this.carService.getAllCarModels().subscribe(data => {
            this.carModelList = data;
        });
    }

    public filteredModelList: any;

    filterModelsByBrand(event) {
        this.filteredModelList = [];
        let brandId: any;
        if(event != null ){ this.disableModel = false}

        for (let brand of this.carBrandsList) {
            if (brand.name == event) {
                brandId = brand.brand_id;
                break;
            }
        }

        this.carModelList.forEach(model => {
            if (model.brand_id == brandId) {
                this.filteredModelList.push(model.name);
            }
        });
        this.modelList = this.filteredModelList;
        this.filteredModels = this.searchedModel.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value, this.modelList))
            );

    }

}
