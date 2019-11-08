import {Component, NgZone, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {AuthenticationService} from "../../auth/authentication.service";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";
import {Observable, Observer, Subject} from "rxjs/index";
import {map, startWith, takeUntil} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {UUID} from "angular2-uuid";
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireStorage} from "@angular/fire/storage";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {reject} from "q";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit, OnDestroy {
    constructor(
        private authService: AuthenticationService,
        private fb: FormBuilder,
        private _firestore: AngularFirestore,
        private _storage: AngularFireStorage,
        private route: ActivatedRoute,
        private httpClient: HttpClient,
        private _snackBar: MatSnackBar,
        private ngZone: NgZone
    ) {
        this.createForm = fb.group({
            title: [null, Validators.required],
            description: [null, Validators.required],
            price: [null, Validators.required],
            currency: [null, Validators.required],
            manufacturer: [null, Validators.required],
            model: [null, Validators.required],
            structure: [null, Validators.required],
            year: [null, Validators.required],
            color: [null, Validators.required],
            mileage: [null, Validators.required],
            transmission: [null, Validators.required],
            fuel: [null, Validators.required],
            plateRegistration: [null, Validators.required],
            city: [null, Validators.required]
        });
        this.ngZone = ngZone;
    }

    protected finishedUploading: boolean = false;
    protected uploading: boolean = false;
    protected createForm: FormGroup;
    protected uploadedFiles = [];
    @ViewChild("myPond") myPond: any;
    protected pondOptions = {
        class: "my-filepond",
        multiple: true,
        labelIdle: '<div style="cursor: pointer">Ngarkoni imazhe ketu</div>',
        acceptedFileTypes: "image/jpeg, image/png"
    };
    protected carModelList: any;
    protected carBrandsList: any;
    protected filteredModelList: any;
    postToBeEditedUuid: string = "";

    private unSubscribeSubject: Subject<any> = new Subject();
    private unSubscribePatchSubject: Subject<any> = new Subject();

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
    public currencyList: any[] = ["Euro"];
    public producerList: any = [];
    public modelList: any = [];
    disableModel: any = true;
    productionYear = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
    carTypes = [
        {
            name: "micro",
            title: "Micro",
            imageURL: "assets/car-types/micro.png"
        },
        {
            name: "hatchback",
            title: "Hatchback",
            imageURL: "assets/car-types/hatchback.png"
        },
        {
            name: "coupe",
            title: "Coupe",
            imageURL: "assets/car-types/coupe.png"
        },
        {
            name: "cabriolet",
            title: "Cabriolet",
            imageURL: "assets/car-types/cabriolet.png"
        },
        {
            name: "sedan",
            title: "Sedan",
            imageURL: "assets/car-types/sedan.png"
        },
        {
            name: "estate",
            title: "Estate",
            imageURL: "assets/car-types/crossover.png"
        },
        {
            name: "roadster",
            title: "Roadster",
            imageURL: "assets/car-types/roadster.png"
        },
        {
            name: "minivan",
            title: "Minivan",
            imageURL: "assets/car-types/minivan.png"
        },
        {
            name: "crossover",
            title: "Crossover",
            imageURL: "assets/car-types/crossover.png"
        },
        {
            name: "suv",
            title: "Suv",
            imageURL: "assets/car-types/suv.png"
        },
        {
            name: "pickup",
            title: "Pickup",
            imageURL: "assets/car-types/pickup.png"
        },
        {
            name: "van",
            title: "Furgon",
            imageURL: "assets/car-types/van.png"
        },
        {
            name: "camper",
            title: "Kamper",
            imageURL: "assets/car-types/camper.png"
        },
        {
            name: "smallTruck",
            title: "Kamion i vogel",
            imageURL: "assets/car-types/smalltruck.png"
        },
        {
            name: "truck",
            title: "Kamion",
            imageURL: "assets/car-types/truck.png"
        },
        {
            name: "bigTruck",
            title: "Kamion i madh",
            imageURL: "assets/car-types/bigtruck.png"
        }
    ];
    colors = ['white', 'black', 'grey', 'beige', 'red', 'yellow', 'green', 'blue'];
    kilometers = [
        {
            title: "0 - 4,999 km",
            value: [0, 4999]
        }
    ];
    cities = [
        "Tirane",
        "Fier",
        "Lushnje",
        "Korce",
        "Pogradec",
        "Durres",
        "Berat",
        "Sarande",
        "Tropoje"
    ];
    protected  postToBeEdited :any;
    ngOnInit() {
        this.getCarBrands();
        this.getCarModels();
        this.subscribeToValueChanges();
        AuthenticationService.loginSubject
            .pipe(takeUntil(this.unSubscribeSubject))
            .subscribe(user => {
                if (user) {
                    this.route.queryParamMap.subscribe((params: any) => {
                        this.patchListing(params, user)
                    });
                }
            });
    }

    ngOnDestroy() {
        this.unSubscribePatchSubject.complete()
        this.unSubscribeSubject.complete()
    }

    showUploadedFiles(event) {
        console.log(event)

    }

    patchListing(params, user) {
        if (Object.entries(params.params).length != 0 && params.params.postUuid) {

            this.postToBeEditedUuid = params.params.postUuid;
            this._firestore
                .collection("cars", ref =>
                    ref
                        .where("user.email", "==", user.email)
                        .where("uuid", "==", params.params.postUuid)
                )
                .snapshotChanges()
                .pipe(
                    map((arr: any) => {
                        return arr.map(snap => {
                            const data = snap.payload.doc.data();
                            const doc = snap.payload.doc;
                            return { ...data, doc };
                        });
                    })
                )
                .pipe(takeUntil(this.unSubscribePatchSubject))
                .subscribe((res: any) => {
                    this.unSubscribePatchSubject.next();
                    this.postToBeEdited = res;
                    this.createForm.patchValue({
                        title: res[0].title,
                        description: res[0].description,
                        price: res[0].price.value,
                        currency: res[0].price.currency,
                        manufacturer: res[0].manufacturer,
                        model: res[0].model,
                        structure: res[0].structure,
                        year: res[0].year,
                        color: res[0].color,
                        mileage: [res[0].mileage[0], res[0].mileage[1]],
                        transmission: res[0].transmission,
                        fuel: res[0].fuel,
                        plateRegistration: res[0].plateRegistration,
                        city: res[0].city
                    });

                    for (let image in res[0].images) {
                        this.getImageBlobs(res[0].images[image]);
                    }


                });
        } else this.postToBeEditedUuid = "";
    }

    getImageBlobs(image) {
        console.log("getting images")

        var request = new XMLHttpRequest();
        request.open('GET', image, true);
        request.responseType = 'blob';

        request.onload = ((event) => {
            if (request.response != null) {
                var reader = new FileReader();
                reader.readAsDataURL(request.response);
                reader.onload = ((e: any) => {
                    console.log(e.target.result)
                    this.myPond.addFile(e.target.result).then(file => file.name = '');
                    this.uploadedFiles = [...this.myPond.getFiles()];
                });
            }
        }).bind(this);
        request.send();
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
        this.filteredCarTypes = this.searchedStructure.valueChanges.pipe(
            startWith(""),
            map(value => this._filterCar(value, this.carTypes))
        );
        this.filteredYears = this.searchedYear.valueChanges.pipe(
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
        this.carBrandsList = environment.carManufacturers;
        this.carBrandsList.forEach(brand => {
            this.producerList.push(brand.name);
        });
        this.searchedManufacturer.setValue("");
    }

    getCarModels() {
        this.carModelList = environment.carModels;
    }

    filterModelsByBrand(event) {
        this.filteredModelList = [];
        let brandId: any;
        if (event != null) {
            this.disableModel = false;
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
        this.filteredModels = this.searchedModel.valueChanges.pipe(
            startWith(""),
            map(value => this._filter(value, this.modelList))
        );
    }

    async createItem(post) {
        if (!this.checkForEmptyFields(post)) {
            if(this.postToBeEditedUuid == ""){
                this.uploading = true;
                let car: any = this.generateCarFromPost(post);
                car.user = {
                    id: this.authService.user.uid,
                    email: this.authService.user.email
                };

        car.created = new Date().getTime();
        car.organic = true;
        let pondFiles = this.myPond.getFiles();

                for (let pf of pondFiles) {
                    await this._storage
                        .upload(car.uuid + "/" + pf.file.name, pf.file)
                        .then(async a => {
                            await this._storage
                                .ref(car.uuid + "/" + pf.file.name)
                                .getDownloadURL()
                                .toPromise()
                                .then(res => {
                                    car.images.push(res);
                                });
                        });
                }

                this._firestore
                    .collection("cars")
                    .add(car)
                    .then(
                        res => {
                            this.uploading = false;
                            this.finishedUploading = true;
                        },
                        err => {
                            console.log(err);
                        }
                    );
            }
            else {
                this._fireStore.collection('cars').doc(this.postToBeEdited.doc.id).set(post)
                    .then(res => {
                        this.snackBar.open('Listing added to favourites.', null, {duration: 1500})
                    }, error => {
                        this.snackBar.open('There was an error', null, {duration: 1500})
                    });
            }


        }
    }

    found: boolean = false;

    checkForEmptyFields(body) {
        Object.keys(body).forEach(element => {
            if (body[element] == null) {
                this.found = true;
            } else {
                this.found = false;
            }
        });

        if (this.found == true) {
            this._snackBar.open("Nje ose me shume fusha jane bosh!", "", {
                duration: 5000
            });
        }
        return this.found;
    }

    generateCarFromPost(post) {
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
            userEmailsWhoFavourite: [],
            created: new Date().getTime(),
            uuid: UUID.UUID()
        };
    }

    resetView() {
        this.finishedUploading = false;
    }
}
