import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/Subject";
import {Location} from "@angular/common";
import {PaginationService} from "../../services/pagination.service";
import {SeoService} from "../../services/seo.service";
import {AuthenticationService} from "../../auth/authentication.service";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {

    constructor(private activatedRoute: ActivatedRoute,
                private location: Location,
                private paginationService: PaginationService,
                private router: Router,
                private _fireStore: AngularFirestore,
                private seo: SeoService,
                private authenticationService: AuthenticationService,
                private snackBar: MatSnackBar) {
    }

    env = environment;
    descriptionToggle = true;
    customOptions: any = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        center: true,
        navSpeed: 700,
        nav: false,
        // navText: ['previous', 'next'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
    }
    selectedCar: any = {};
    stopSubscriptions = new Subject();

    public similarCars: any[] = [];

    view;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }

    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.id != null) {
                if (this.paginationService.selectedListing != null && this.paginationService.selectedListing.uuid == params.id) {
                    console.log("got listing from service");
                    this.selectedCar = this.paginationService.selectedListing;
                    this.seo.setSeoTags(
                        this.selectedCar.title + ' | youscout.net',
                        this.selectedCar.images[0].url,
                        this.selectedCar.description,
                        'makina ne shitje, makina te perdorura, youscout.net, kambio automatike, shitblerje makinash, vetura ne kosove, makina ne gjermani, okazion, makina, tirane, shkoder, durres, kavaje, korce, elbasan, fier, vlore, lushnje',
                        'http://youscout.net/mobile/listing?id='+ this.selectedCar.id
                    );
                    this.getSimilarCars(this.selectedCar);
                    this.selectedCar.images == null ? this.selectedCar.images = [{url: '/assets/illustrations/placeholder.jpg'}] : {};
                } else {
                    console.log("got listing from backend");
                    this._fireStore.collection('cars', ref => ref.where('uuid', '==', params.id).limit(1))
                        .valueChanges()
                        .pipe(takeUntil(this.stopSubscriptions)).subscribe(res => {
                        this.selectedCar = res[0];
                        this.seo.setSeoTags(
                            this.selectedCar.title + ' | youscout.net',
                            this.selectedCar.images[0].url,
                            this.selectedCar.description,
                            'makina ne shitje, makina te perdorura, youscout.net, kambio automatike, shitblerje makinash, vetura ne kosove, makina ne gjermani, okazion, makina, tirane, shkoder, durres, kavaje, korce, elbasan, fier, vlore, lushnje',
                            'http://youscout.net/mobile/listing?id='+ this.selectedCar.id
                        );
                        this.getSimilarCars(this.selectedCar);
                        this.selectedCar.images == null ? this.selectedCar.images = [{url: '/assets/illustrations/placeholder.jpg'}] : {};
                        // this.stopSubscriptions.next();
                    })
                }
            }
        })
    }

    ngOnDestroy() {
        this.stopSubscriptions.next();
        this.stopSubscriptions.complete();
    }

    goBack() {
        this.location.back();
    }

    private getSimilarCars(selectedCar: any): void {
        this._fireStore
            .collection('cars', ref =>
                ref.where('manufacturer', '==', selectedCar.manufacturer)
                    .where('model', '==', selectedCar.model)
                    .limit(4)
            )
            .valueChanges()
            .pipe(takeUntil(this.stopSubscriptions)).subscribe(res => {
            if (res != null) {
                res.forEach((car: any) => {
                    if (car.images == null) {
                        car.images = [{url: '/assets/illustrations/placeholder.jpg'}];
                    }
                })
            }
            this.similarCars = res.filter((car: any) => (car.uuid != selectedCar.uuid));
        })
    }

    handleItemEvent(event) {
      if (event != null) {
          this.router.navigate(['/mobile/listing'], {queryParams: {id: event.target.uuid}})
      }
    }
    favourite(item){
        console.log(item)
        if (this.authenticationService.isLoggedIn) {
            item.userEmailsWhoFavourite == null ? item.userEmailsWhoFavourite = [] : {};
            const previousEntry = item.userEmailsWhoFavourite.find(email => {
                return email == this.authenticationService.user.email
            });
            if (previousEntry != this.authenticationService.user.email || previousEntry == null) {
                item.userEmailsWhoFavourite.push(this.authenticationService.user.email);
                let carWithoutDoc = {...item};
                delete carWithoutDoc.doc;
                this._fireStore.collection('cars').doc(item.doc.id).set(carWithoutDoc)
                    .then(res => {
                        this.snackBar.open('Listing added to favourites.', null, {duration: 1500})
                    }, error => {
                        this.snackBar.open('There was an error', null, {duration: 1500})
                    });
            } else {
                this.snackBar.open('Listing already added to favourites', null, {duration: 1500})
            }

        } else {
            this.snackBar.open('You need te be logged in to add to favourites', 'log in', {duration: 2000})
        }
    }
    copy(item){
        document.addEventListener('copy', (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);

        });
        document.execCommand('copy');
        this.snackBar.open('Copied to keyboard',null,{duration:1500});
    }
}
