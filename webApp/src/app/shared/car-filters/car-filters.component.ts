import {Component, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs/index";
import {FormControl} from "@angular/forms";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'car-filters',
    templateUrl: './car-filters.component.html',
    styleUrls: ['./car-filters.component.scss']
})
export class CarFiltersComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.getCarBrands();
        this.getCarModels();
        this.patchExistingFilters();
        this.subscribeToValueChanges();
    }

    @Output() filtersListener = new Subject();
    @Output() sortListener = new Subject();

    @Input() existingFilters: any;
    @Input() existingSort: any;


    protected filters: any = {};
    protected manufacturer: any;
    protected model: any;
    protected minValue: number;
    protected maxValue: number;
    protected minYear: number;
    protected maxYear: number;

    patchExistingFilters() {

        if(this.existingSort != null){
            if(this.existingSort.sort == 'created' && this.existingSort.reverse == false){
                this.selectedSort.setValue("dateASC")
            }else if(this.existingSort.sort == 'created' && this.existingSort.reverse == true){
                this.selectedSort.setValue("dateDESC")
            }else if(this.existingSort.sort == 'price.value' && this.existingSort.reverse == false){
                this.selectedSort.setValue("priceASC")
            }else if(this.existingSort.sort == 'price.value' && this.existingSort.reverse == true){
                this.selectedSort.setValue("priceDESC")
            }
        }

        if (this.existingFilters != null) {
            if (this.existingFilters.manufacturer != null) {
                this.selectedManufacturer.setValue(this.existingFilters.manufacturer);
                this.filterModelsByBrand(this.existingFilters.manufacturer);
            }
            ;
            this.existingFilters.model != null ? this.selectedModel.setValue(this.existingFilters.model) : {};
            this.existingFilters.structure != null ? this.selectedStructure.setValue(this.existingFilters.structure) : {};
            this.existingFilters.color != null ? this.selectedColor.setValue(this.existingFilters.color) : {};
            this.existingFilters.transmission != null ? this.selectedTransmission.setValue(this.existingFilters.transmission) : {};
            this.existingFilters.city != null ? this.selectedCity.setValue(this.existingFilters.city) : {};
            this.existingFilters.plateRegistration != null ? this.selectedPlateRegistration.setValue(this.existingFilters.plateRegistration) : {};
            this.existingFilters.fuel != null ? this.selectedFuel.setValue(this.existingFilters.fuel) : {};
            if (this.existingFilters.value != null) {
                this.minValue = this.existingFilters.value[0];
                this.maxValue = this.existingFilters.value[1];
            }
            if (this.existingFilters.year != null) {
                this.minYear = this.existingFilters.year[0];
                this.maxYear = this.existingFilters.year[1];
            }

            this.filters = this.existingFilters;
        }
    }

    subscribeToValueChanges() {
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

    changedSort(event) {
        if (event.value == 'dateASC') {
            this.sortListener.next({sort: 'created', reverse: false})
        } else if (event.value == 'dateDESC') {
            this.sortListener.next({sort: 'created', reverse: true})
        } else if (event.value == 'priceASC') {
            this.sortListener.next({sort: 'price.value', reverse: false})
        } else if (event.value == 'priceDESC') {
            this.sortListener.next({sort: 'price.value', reverse: true})
        }
    }

    changedFilters(filter, event) {
        if (filter == "minPrice") {
            !this.filters.value ? this.filters.value = [] : {};
            this.filters.value[0] = event
        } else if (filter == "maxPrice") {
            !this.filters.value ? this.filters.value = [] : {};
            this.filters.value[1] = event
        }else if (filter == "minYear") {
            !this.filters.year ? this.filters.year = [] : {};
            this.filters.year[0] = event
        } else if (filter == "maxYear") {
            !this.filters.year ? this.filters.year = [] : {};
            this.filters.year[1] = event
        } else {
            this.filters[filter] = event;
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
    selectedSort: FormControl = new FormControl();
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
    disableModel: any = true;
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
    public carModelList: any;
    public carBrandsList: any;

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


    getCarBrands() {
        this.carBrandsList = environment.carManufacturers;
        this.carBrandsList.forEach(brand => {
            this.producerList.push(brand.name);
        });
        this.searchedManufacturer.setValue("");
    }

    getCarModels() {
        this.carModelList = environment.carModels;
    }

    public filteredModelList: any;

    filterModelsByBrand(event) {
        this.filteredModelList = [];
        let brandId: any;
        if (event != null) {
            this.disableModel = false
        }

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
