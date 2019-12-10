import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs/index";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil} from "rxjs/operators";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private _fireStore: AngularFirestore) {
    }

    private unSubscribeLatestSubject: Subject<any> = new Subject();
    protected latestListings: any;

    ngOnInit() {
        this.getLatestListings()
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
}
