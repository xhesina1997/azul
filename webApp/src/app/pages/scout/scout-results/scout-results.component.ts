import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'app-scout-results',
    templateUrl: './scout-results.component.html',
    styleUrls: ['./scout-results.component.scss']
})
export class ScoutResultsComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private _fireStore: AngularFirestore) {
    }

    stopSubscriptions = new Subject();
    scoutReport = null;
    items = [];
    itemIndex = 0
    maxItems = 6

    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.id != null) {
                this._fireStore.collection('scouts', ref => ref.where('uuid', '==', params.id).limit(1))
                    .valueChanges()
                    .pipe(takeUntil(this.stopSubscriptions))
                    .subscribe(res => {
                        this.scoutReport = res[0];
                        this.stopSubscriptions.next()
                        this.getItems(this.scoutReport.results.slice(this.itemIndex, this.itemIndex + this.maxItems));
                    })
            }
        });
    }

    getItems(uuids){
        this._fireStore.collection('cars', ref => ref.where('uuid', 'in', uuids).limit(this.maxItems))
            .valueChanges()
            .pipe(takeUntil(this.stopSubscriptions))
            .subscribe(res => {
                res.forEach(r => this.items.push(r));
                this.stopSubscriptions.next()
            })
    }

    loadMoreItems(){
        this.itemIndex += this.maxItems;
        this.getItems(this.scoutReport.results.slice(this.itemIndex, this.itemIndex + this.maxItems));
    }

    ngOnDestroy() {
        this.stopSubscriptions.next();
        this.stopSubscriptions.complete();
    }

    handleItemEvent(event) {
        switch (event.type) {
            case "favourite":
                // this.addUserWhoFavourite(event.target);
                break;
            case "open":
                this.openListing(event.target);
                break;
        }
    }

    openListing(target) {
        this.router.navigate(['/listing'], {queryParams: {id: target.uuid}})
    }

    view;
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        event.target.innerWidth > 960 ? this.view = 'desktop' : event.target.innerWidth > 600 ? this.view = 'tablet' : this.view = 'mobile';
    }
}
