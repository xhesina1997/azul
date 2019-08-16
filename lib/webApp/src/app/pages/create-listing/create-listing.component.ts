import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {CarService} from "../../api/car.service";
import {CdnService} from "../../api/cdn.service";
import {UUID} from 'angular2-uuid';
import {Subject} from "rxjs/internal/Subject";
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AuthenticationService} from "../../auth/authentication.service";

@Component({
    selector: 'app-create-listing',
    templateUrl: './create-listing.component.html',
    styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {

    public createForm: FormGroup;
    @ViewChild('myPond') myPond: any;
    public finishedUploading: boolean = false;

    protected progress = new Subject();
    selectedManufacturer: FormControl = new FormControl();
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

    constructor(
        private carService: CarService,
        private cdn: CdnService,
        private fb: FormBuilder,
        private authService: AuthenticationService
    ) {
        this.createForm = fb.group({
            'title': [null, Validators.required],
            'description': [null, Validators.required],
            'price': [null, Validators.required],
            'currency': [null, Validators.required],
            'manufacturer': [null, Validators.required],
            'model': [null, Validators.required],
            'structure': [null, Validators.required],
            'year': [null, Validators.required],
            'color': [null, Validators.required],
            'mileage': [null, Validators.required],
            'transmission': [null, Validators.required],
            'fuel': [null, Validators.required],
            'plateRegistration': [null, Validators.required],
            'city': [null, Validators.required],
        });
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

    pondOptions = {
        class: 'my-filepond',
        multiple: true,
        labelIdle: '<div style="cursor: pointer">Ngarkoni imazhe ketu</div>',
        acceptedFileTypes: 'image/jpeg, image/png'
    };

    uploadedFiles = [];

    pondHandleInit() {
        console.log('FilePond has initialised', this.myPond);
    }

    pondHandleAddFile(event: any) {
        console.log('A file was added', event);
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



    createItem(post) {
        console.log(post);

        let car: any = CreateListingComponent.generateCarFromPost(post);

        car.user = {
            id: this.authService.user.id,
            name: this.authService.user.name,
            username: this.authService.user.username,
            email: this.authService.user.email
        };

        let pondFiles = this.myPond.getFiles();
        let count = 1;

        pondFiles.forEach(pondFile => {
            let fileType = pondFile.filename.split('.')[pondFile.filename.split('.').length - 1];
            car.images.push('img' + count + '.' + fileType);
            count++;
        });

        let completed = 0;
        let steps = car.images.length + 1;

        this.carService.uploadCar(car).subscribe(res => {
            this.progress.next();
            for (let i = 0; i < car.images.length; i++) {
                this.cdn.uploadImage(pondFiles[i].file, car.images[i], car.uuid)
                    .subscribe(res => this.progress.next())
            }
        });

        this.progress.subscribe(progress => {
            completed = completed + 1;
            console.log(((completed / steps) * 100) + "%");
            if (completed == steps) {
                this.finishedUploading = true;
            }
        })

    }

    static generateCarFromPost(post) {
        return {
            title: post.title,
            description: post.description,
            price: {
                value: post.price,
                currency: post.currency
            },
            manufacturer: post.manufacturer,
            model: post.model,
            structure: post.structure,
            year: post.year,
            color: post.color,
            mileage: post.mileage,
            transmission: post.transmission,
            fuel: post.fuel,
            plateRegistration: post.plateRegistration,
            city: post.city,
            images: [],
            uuid: UUID.UUID()
        }
    }

    resetView() {
        this.finishedUploading = false;
    }

}
