import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, startWith, takeUntil} from "rxjs/operators";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthenticationService} from "../../auth/authentication.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.scss']
})
export class ScoutComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private _fireStore: AngularFirestore){
    this.createForm = fb.group({
      email: [null, Validators.required],
      priceFrom: [null],
      priceTo: [null],
      manufacturer: [null],
      model: [null],
      structure: [null],
      yearFrom: [null],
      yearTo: [null],
      mileage: [null],
      transmission: [null],
      fuel: [null],
      plateRegistration: [null],
      city: [null]
    });
  }
  finishedUploading: boolean = false;
  imgShow: boolean = true;
  createForm: FormGroup;
  moreFilters: boolean = false;
  carModelList: any;
  carBrandsList: any;
  filteredModelList: any;
  postToBeEditedUuid: string = "";
  selectedManufacturer: FormControl = new FormControl();
  searchedCurrency: FormControl = new FormControl();
  searchedManufacturer: FormControl = new FormControl();
  searchedModel: FormControl = new FormControl();
  searchedStructure: FormControl = new FormControl();
  searchedYear: FormControl = new FormControl();
  searchedYearTo: FormControl = new FormControl();
  searchedColor: FormControl = new FormControl();
  searchedMileage: FormControl = new FormControl();
  searchedCity: FormControl = new FormControl();
  filteredCurrency: Observable<string[]>;
  filteredManufacturer: Observable<string[]>;
  filteredModels: Observable<string[]>;
  filteredYears: Observable<string[]>;
  filteredYearsTo: Observable<string[]>;
  filteredColors: Observable<string[]>;
  filteredKilometers: Observable<string[]>;
  filteredCities: Observable<string[]>;
  public currencyList: any[] = ["Euro"];
  public producerList: any = [];
  public modelList: any = [];
  disableModel: any = true;
  productionYear = [];
  colors = ['white', 'black', 'grey', 'beige', 'red', 'yellow', 'green', 'blue'];
  kilometers = [
    {
      title: "0 - 4,999 km",
      value: [0, 4999]
    },
    {
      title: "5000km - 9,999 km",
      value: [5000, 9999]
    },
    {
      title: "10000km - 14,999 km",
      value: [10000, 14999]
    },
    {
      title: "15000km - 19,999 km",
      value: [15000, 19999]
    },
    {
      title: "20000km - 24,999 km",
      value: [20000, 24999]
    },
    {
      title: "25000km - 29,999 km",
      value: [25000, 29999]
    },
    {
      title: "30000km - 34,999 km",
      value: [30000, 34999]
    },
    {
      title: "35000km - 39,999 km",
      value: [35000, 39999]
    },
    {
      title: "40000km - 44,999 km",
      value: [40000, 44999]
    },
    {
      title: "45000km - 49,999 km",
      value: [45000, 49999]
    },
    {
      title: "50000km - 54,999 km",
      value: [50000, 54999]
    },
    {
      title: "55000km - 59,999 km",
      value: [55000, 59999]
    },
    {
      title: "60000km - 64,999 km",
      value: [60000, 64999]
    },
    {
      title: "65000km - 69,999 km",
      value: [65000, 69999]
    },
    {
      title: "70000km - 74,999 km",
      value: [70000, 74999]
    },
    {
      title: "75000km - 79,999 km",
      value: [75000, 79999]
    },
    {
      title: "80000km - 84,999 km",
      value: [80000, 84999]
    },
    {
      title: "85000km - 89,999 km",
      value: [85000, 89999]
    },
    {
      title: "90000km - 94,999 km",
      value: [90000, 94999]
    },
    {
      title: "95000km - 99,999 km",
      value: [95000, 99999]
    },
    {
      title: "100000km - 109,999km",
      value: [100000, 109999]
    },
    {
      title: "110000km - 119,999 km",
      value: [110000, 119999]
    },
    {
      title: "120000km - 129,999 km",
      value: [120000, 129999]
    },
    {
      title: "130000km - 139,999 km",
      value: [130000, 139999]
    },
    {
      title: "140000km - 149,999 km",
      value: [140000, 149999]
    },
    {
      title: "150000km - 159,999 km",
      value: [150000, 159999]
    },
    {
      title: "160000km - 169,999 km",
      value: [160000, 169999]
    },
    {
      title: "170000km - 179,999 km",
      value: [170000, 179999]
    },
    {
      title: "180000km - 189,999 km",
      value: [180000, 189999]
    },
    {
      title: "190000km - 199,999 km",
      value: [190000, 199999]
    },
    {
      title: "200000km - 209,999 km",
      value: [200000, 209999]
    },
    {
      title: "210000km - 219,999 km",
      value: [210000, 219999]
    },
    {
      title: "220000km - 229,999 km",
      value: [220000, 229999]
    },
    {
      title: "230000km - 239,999 km",
      value: [230000, 239999]
    },
    {
      title: "240000km - 249,999 km",
      value: [240000, 249999]
    },
    {
      title: "250000km - 284,999 km",
      value: [250000, 284999]
    },
    {
      title: "285000km - 299,999 km",
      value: [285000, 299999]
    },
    {
      title: "300000km - 349,999 km",
      value: [300000, 349999]
    },
    {
      title: "350000km - 399,999 km",
      value: [350000, 399999]
    },
    {
      title: "450000km - 499,999 km",
      value: [450000, 499999]
    },
    {
      title: "> 500000 km",
      value: [500000, 500000]
    },

  ];
  cities = [
    'Berat',
    'Bulqizë',
    'Delvinë',
    'Devoll',
    'Dibër',
    'Durrës',
    'Elbasan',
    'Fier',
    'Gramsh',
    'Gjirokastër',
    'Has',
    'Kavajë',
    'Kolonjë',
    'Korçë',
    'Krujë',
    'Kucovë',
    'Kukës',
    'Kurbin',
    'Lezhë',
    'Librazhd',
    'Lushnjë',
    'Malësi e Madhe',
    'Mallakastër',
    'Mat',
    'Mirditë',
    'Peqin',
    'Përmet',
    'Pogradec',
    'Pukë',
    'Sarandë',
    'Skrapar',
    'Shkodër',
    'Tepelenë',
    'Tiranë',
    'Tropojë',
    'Vlorë'
  ];
  private unSubscribeAuthSubject: Subject<any> = new Subject();

  ngOnInit() {
    this.subscribeToValueChanges();
    this.getCarBrands();
    this.getCarModels();
    this.populateYears();
    setInterval(() => {
      this.imgShow = !this.imgShow;
    }, 5500)
    AuthenticationService.loginSubject
        .pipe(takeUntil(this.unSubscribeAuthSubject))
        .subscribe(user => {
          if (user) {
            this.createForm.patchValue({email : user.email})
          }
        });
  }


  ngOnDestroy(){
    this.unSubscribeAuthSubject.complete();
  }

  populateYears() {
    this.productionYear.push(new Date().getFullYear().toString());
    for (let i = 2020; i > 1950; i--) {
      this.productionYear.push((i - 1).toString());
    }

  }

  subscribeToValueChanges() {
    this.filteredCurrency = this.searchedCurrency.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.currencyList))
    );
    this.filteredManufacturer = this.searchedManufacturer.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.producerList))
    );
    this.filteredModels = this.searchedModel.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.modelList))
    );
    this.filteredYears = this.searchedYear.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.productionYear))
    );
    this.filteredYearsTo = this.searchedYearTo.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.productionYear))
    );
    this.filteredColors = this.searchedColor.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.colors))
    );
    this.filteredKilometers = this.searchedMileage.valueChanges.pipe(
        startWith(""),
        map(value => this._filterKm(value, this.kilometers))
    );
    this.filteredCities = this.searchedCity.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.cities))
    );
  }

  private _filter(value: string, list): string[] {
    const filterValue = value.toLowerCase();
    return list.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterCar(value: string, list): string[] {
    const filterValue = value.toLowerCase();
    return list.filter(option =>
        option.name.toLowerCase().includes(filterValue)
    );
  }

  private _filterKm(value: string, list): string[] {
    const filterValue = value.toLowerCase();
    return list.filter(option =>
        option.title.toLowerCase().includes(filterValue)
    );
  }

  getCarBrands() {
    this.carBrandsList = environment.manufacturers;
    this.producerList = environment.manufacturers;
    this.searchedManufacturer.setValue("");
  }

  getCarModels() {
    this.carModelList = environment.models;
  }

  filterModelsByBrand(event) {
    this.filteredModelList = [];

    if (event != null) {
      this.disableModel = false;
    }

    this.filteredModelList = this.carModelList[event];

    this.modelList = this.filteredModelList;
    this.filteredModels = this.searchedModel.valueChanges.pipe(
        startWith(""),
        map(value => this._filter(value, this.modelList))
    );
  }

  createItem(post) {
    post.uuid = UUID.UUID()
    post.results = [];
    this._fireStore.collection("scouts").add(post)
        .then(
            res => {
              this.finishedUploading = true;
            },
            err => {
              console.log(err);
            }
        );
  }

  resetView(){
    this.finishedUploading = false;
  }
}
