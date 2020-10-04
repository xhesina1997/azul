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
import {generate} from 'shortid';
import {TranslateService} from "@ngx-translate/core";
import {SeoService} from "../../services/seo.service";

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit, OnDestroy {
    constructor(
        public authService: AuthenticationService,
        private fb: FormBuilder,
        private _firestore: AngularFirestore,
        private _storage: AngularFireStorage,
        private route: ActivatedRoute,
        private httpClient: HttpClient,
        private _snackBar: MatSnackBar,
        private ngZone: NgZone,
        private translate: TranslateService,
        private seo: SeoService
    ) {
        seo.setSeoTags(
            'Shto nje makine falas | youscout.net',
            'https://youscout.net/assets/illustrations/meta-img.png',
            'Shto nje makine ne youscout.net, hidh nje makine online, listo makina tirane shkoder durres kavaje korce elbasan fier vlore lushnje',
            'makina ne shitje, makina te perdorura, youscout.net, kambio automatike, shitblerje makinash, merrjep, vetura ne kosove, makina ne gjermani, okazion, makina, tirane, shkoder, durres, kavaje, korce, elbasan, fier, vlore, lushnje',
            'http://youscout.net/create'
        );

        this.createForm = fb.group({
            title: [null, Validators.required],
            description: [null, Validators.required],
            publisher: [null, Validators.required],
            phoneNumber: [null, Validators.required],
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

      finishedUploading: boolean = false;
      uploading: boolean = false;
      createForm: FormGroup;
      uploadedFiles = [];
    @ViewChild("myPond") myPond: any;
      pondOptions = {
        class: "my-filepond",
        multiple: true,
        labelIdle: '<div style="cursor: pointer">Upload images</div>',
        acceptedFileTypes: "image/jpeg, image/png",
        fileRenameFunction: (file) => {
            return generate();
        }
    };
      carModelList: any;
      carBrandsList: any;
      filteredModelList: any;
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
    productionYear = [];
    limitOfPostingReached: boolean = false;
      user: any;
    private unSubscribeAuthSubject: Subject<any> = new Subject();
    private unSubscribeUserListingsSubject: Subject<any> = new Subject();
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
    postToBeEdited: any;

    ngOnInit() {

        this.getUserListings();
        this.getCarBrands();
        this.getCarModels();
        this.populateYears();
        this.subscribeToValueChanges();
    }

    getUserListings() {
        AuthenticationService.loginSubject
            .pipe(takeUntil(this.unSubscribeAuthSubject))
            .subscribe(user => {
                if (user) {
                    this.route.queryParamMap.subscribe((params: any) => {
                        this.patchListing(params, user)
                    });
                    this.user = user;
                    this.checkIfUserHasReachedPostingLimit();
                }
            });
    }

    checkIfUserHasReachedPostingLimit() {
        this._firestore
            .collection("cars", ref => ref.where("user.email", "==", this.user.email))
            .snapshotChanges()
            .pipe(
                map((arr: any) => {
                    return arr.map(snap => {
                        const data = snap.payload.doc.data();
                        const doc = snap.payload.doc;
                        return {...data, doc};
                    });
                })
            )
            .pipe(takeUntil(this.unSubscribeUserListingsSubject))
            .subscribe(res => {
                res.length == 3 ? this.limitOfPostingReached = true : {};
                this.unSubscribeUserListingsSubject.next();
            });
    }

    ngOnDestroy() {
        this.unSubscribePatchSubject.complete()
        this.unSubscribeSubject.complete()
    }

    populateYears() {
        this.productionYear.push(new Date().getFullYear().toString());
        for (let i = 2020; i > 1950; i--) {
            this.productionYear.push((i - 1).toString());
        }

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
                            return {...data, doc};
                        });
                    })
                )
                .pipe(takeUntil(this.unSubscribePatchSubject))
                .subscribe((res: any) => {
                    this.unSubscribePatchSubject.next();
                    this.postToBeEdited = res[0];

                    this.createForm.patchValue({
                        title: res[0].title,
                        publisher: res[0].publisher,
                        phoneNumber: res[0].phoneNumber,
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

                    for (let image of res[0].images) {
                        this.getImageBlobs(image.url);
                    }


                });
        } else this.postToBeEditedUuid = "";
    }

    getImageBlobs(image) {
        console.log(image)

        var request = new XMLHttpRequest();
        request.open('GET', image, true);
        request.responseType = 'blob';

        request.onload = ((event) => {
            if (request.response != null) {
                var reader = new FileReader();
                reader.readAsDataURL(request.response);
                reader.onload = ((e: any) => {
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

    async createItem(post) {
        if (!this.checkForEmptyFields(post)) {
            if (this.postToBeEditedUuid == "") {
                this.uploading = true;
                let car: any = {};
                this.generateCarFromPost(car, post);
                car.user = {
                    id: this.authService.user.uid,
                    email: this.authService.user.email
                };
                car.images = [];
                car.uuid = UUID.UUID()

                car.created = new Date().getTime();
                car.userEmailsWhoFavourite = [];
                car.organic = true;
                let pondFiles = this.myPond.getFiles();

                for (let pf of pondFiles) {
                    // this._storage.ref(car.uuid).
                    await this._storage
                        .upload(car.uuid + "/" + pf.file.name, pf.file)
                        .then(async a => {

                            let fullImageurl =
                                'https://firebasestorage.googleapis.com/v0/b/azul-50203.appspot.com/o/'
                                + car.uuid + '%2F' + pf.file.name + '?alt=media';

                            let resizedUrl =
                                'https://firebasestorage.googleapis.com/v0/b/azul-50203.appspot.com/o/'
                                + car.uuid + '%2F' + pf.file.name + '?alt=media';

                            car.images.push({
                                name: pf.file.name,
                                url: resizedUrl
                            });
4
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
                this.generateCarFromPost(this.postToBeEdited, post);

                let toBeEditedWithoutDoc = {...this.postToBeEdited};
                delete toBeEditedWithoutDoc.doc;

                // await this._storage.ref(toBeEditedWithoutDoc.uuid).delete()

                let oldImages = [...toBeEditedWithoutDoc.images];
                oldImages.forEach(image => {
                    this._storage.ref(toBeEditedWithoutDoc.uuid + '/' + image.name).delete()
                })
                toBeEditedWithoutDoc.images = [];

                let pondFiles = this.myPond.getFiles();
                for (let pf of pondFiles) {
                    await this._storage
                        .upload(toBeEditedWithoutDoc.uuid + "/" + pf.file.name, pf.file)
                        .then(async a => {
                            let fullImageurl =
                                'https://firebasestorage.googleapis.com/v0/b/azul-50203.appspot.com/o/'
                                + toBeEditedWithoutDoc.uuid + '%2F' + pf.file.name + '?alt=media';

                            let resizedUrl =
                                'https://firebasestorage.googleapis.com/v0/b/azul-50203.appspot.com/o/'
                                + toBeEditedWithoutDoc.uuid + '%2F' + pf.file.name + '?alt=media';

                            toBeEditedWithoutDoc.images.push({
                                name: pf.file.name,
                                url: resizedUrl
                            });
                        });
                }
                this._firestore.collection('cars').doc(this.postToBeEdited.doc.id).set(toBeEditedWithoutDoc)
                    .then(res => {
                        this._snackBar.open('Post updated.', null, {duration: 1500})
                    }, error => {
                        this._snackBar.open('There was an error', null, {duration: 1500})
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

    generateCarFromPost(car, post) {
        car.title = post.title;
        car.description = post.description;
        car.price = {
            value: post.price,
            currency: post.currency
        };
        car.publisher = post.publisher;
        car.phoneNumber = post.phoneNumber;
        car.manufacturer = post.manufacturer;
        car.model = post.model;
        car.structure = post.structure;
        car.year = post.year;
        car.color = post.color;
        car.mileage = post.mileage;
        car.transmission = post.transmission;
        car.fuel = post.fuel;
        car.plateRegistration = post.plateRegistration;
        car.city = post.city;
    }


    resetView() {
        this.finishedUploading = false;
        this.getUserListings();
    }
}
