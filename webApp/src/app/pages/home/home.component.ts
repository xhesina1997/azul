import {Component, HostListener, OnInit} from '@angular/core';
import {Subject} from "rxjs/index";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil} from "rxjs/operators";
import {PaginationService} from "../../services/pagination.service";
import {Router} from "@angular/router";
import {SeoService} from "../../services/seo.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private _fireStore: AngularFirestore,
                private paginationService: PaginationService,
                private router: Router,
                private seo: SeoService) {
            seo.setSeoTags(
                'Makina Ne Shitje | YouScout | Mercedes-Benz, Volkswagen, BMW, Audi | youscout.net',
                'https://youscout.net/assets/illustrations/meta-img.png',
                'Makina ne shitje, makina te perdorura, tregu me i madh ku mund te gjej makina youscout.net kambio automatike, shitblerje makinash vetura ne kosove makina ne gjermani okazion makina tirane shkoder durres kavaje korce elbasan fier vlore lushnje',
                'makina ne shitje, makina te perdorura, youscout.net, kambio automatike, shitblerje makinash, merrjep, vetura ne kosove, makina ne gjermani, okazion, makina, tirane, shkoder, durres, kavaje, korce, elbasan, fier, vlore, lushnje',
                'https://youscout.net/mobile/home'
            );
    }

    private unSubscribeLatestSubject: Subject<any> = new Subject();
    latestListings: any;

    ngOnInit() {
        this.getLatestListings();
        window.dispatchEvent(new Event('resize'));
    }

    getLatestListings() {
        this._fireStore
            .collection("cars", ref => ref.orderBy('created', 'desc').limit(5))
            .valueChanges()
            .pipe(takeUntil(this.unSubscribeLatestSubject))
            .subscribe(res => {
                this.latestListings = res;
                this.unSubscribeLatestSubject.next();
            });
    }

    handleItemEvent(event) {
        switch (event.type) {
            case "favourite":
                break;
            case "open":
                this.openListing(event.target);
                break;
        }
    }

    openListing(target) {
        this.paginationService.selectedListing = target;
        this.router.navigate(['/mobile/listing'], {queryParams: {id: target.uuid}})
    }

    view;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }
}
