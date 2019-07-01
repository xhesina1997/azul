import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {CarService} from "../../api/car.service";
import {CdnService} from "../../api/cdn.service";
import { UUID } from 'angular2-uuid';
import {Subject} from "rxjs/internal/Subject";

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

    constructor(
        private carService: CarService,
        private cdn: CdnService,
        private fb: FormBuilder
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
    }

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

    createItem(post) {
        let car: any = CreateListingComponent.generateCarFromPost(post);
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
            for(let i = 0; i < car.images.length; i++){
                this.cdn.uploadImage(pondFiles[i].file, car.images[i], car.uuid)
                    .subscribe(res => this.progress.next())
            }
        });

        this.progress.subscribe(progress => {
            completed = completed + 1;
            console.log(((completed/steps) * 100) + "%");
            if(completed == steps) {
                this.finishedUploading = true;
            }
        })

    }

    static generateCarFromPost(post){
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

}
