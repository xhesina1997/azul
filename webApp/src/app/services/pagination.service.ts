import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';
import {AngularFirestore, AngularFirestoreCollection, Query} from "@angular/fire/firestore";
import {filter, map, pairwise, take, takeUntil} from "rxjs/operators";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {Router, RoutesRecognized} from "@angular/router";


@Injectable()
export class PaginationService {

    constructor(private _fireStore: AngularFirestore,
                private router: Router) {
        this.router.events
            .pipe(filter(e => e instanceof RoutesRecognized), pairwise(), map((e: [RoutesRecognized, RoutesRecognized]) => e[0].url))
            .subscribe((prev: string) => {
                prev.includes('/mobile/listing') ? this.needsScroll = true : this.needsScroll = false;
            });
    }

    public done = new BehaviorSubject(false);
    public loading = new BehaviorSubject(false);
    public stopSubscriptions = new Subject();
    public listings = [];
    public noListings :boolean = false;
    public scrollHeight : number;
    public needsScroll: boolean = false;
    public selectedListing: any;

    public queryOptions = {
        page: 0,
        size: 10,
        total: 0,
        sort: 'created',
        reverse: false,
        filters: null
    };

    init(){
        this.done.next(false);
        this.loading.next(false);
    }

    addFilters(query: Query){
        console.log(this.queryOptions.filters);
        if (this.queryOptions.filters != null) {
            for(let filter in this.queryOptions.filters){
                console.log(filter);
                console.log(this.queryOptions.filters[filter]);
                if(filter != 'sort' && filter != 'direction'){
                    query = query.where(filter, '==', this.queryOptions.filters[filter]);
                }
            }
        }
        return query;
    }

    getInitialData() {
        let col = this._fireStore.collection('cars', ref => {
            let query: Query = ref;
            query = query.orderBy(this.queryOptions.sort, this.queryOptions.reverse ? 'asc' : 'desc');
            query = query.limit(this.queryOptions.size);
            query = this.addFilters(query);
            return query;
        });
        this.mapResponse(col);
    }

    handleScroll() {
        let col = this._fireStore.collection('cars', ref => {
            let query: Query = ref;
            query = query.orderBy(this.queryOptions.sort, this.queryOptions.reverse ? 'asc' : 'desc');
            query = query.limit(this.queryOptions.size);
            query = query.startAfter(this.listings[this.listings.length - 1].doc);
            query = this.addFilters(query);
            return query;
        });
        this.mapResponse(col);
    }

    mapResponse(collection: AngularFirestoreCollection) {
        if (this.done.value || this.loading.value) {
            return
        } else {
            this.loading.next(true);
            collection.snapshotChanges().pipe(map((arr: any) => {
                return arr.map(snap => {
                    const data = snap.payload.doc.data();
                    const doc = snap.payload.doc;
                    return {...data, doc}
                });
            })).pipe(takeUntil(this.stopSubscriptions)).subscribe(response => {
                if (response.length == 0) {
                    this.done.next(true);
                    if(this.listings.length == 0) this.noListings = true
                } else {
                    this.noListings? this.noListings = false : {};
                    this.listings = this.listings.concat(response);
                    if(response.length < this.queryOptions.size) this.done.next(true);
                    console.log(this.listings);
                }
                this.loading.next(false);
                this.stopSubscriptions.next();
            });
        }
    }

    closeSubscriptions(){
        this.stopSubscriptions.next();
        this.stopSubscriptions.complete();
        this.done.complete();
        this.loading.complete();
    }
}