import {Component, HostListener, OnInit} from '@angular/core';
import {Subject} from "rxjs/index";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil} from "rxjs/operators";
import {PaginationService} from "../../services/pagination.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private _fireStore: AngularFirestore,
                private paginationService: PaginationService,
                private router: Router,) {
    }

    private unSubscribeLatestSubject: Subject<any> = new Subject();
    protected latestListings: any;

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

    protected view;
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }
}
