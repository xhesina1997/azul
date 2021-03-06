import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';
import {AngularFirestore, AngularFirestoreCollection, Query} from "@angular/fire/firestore";
import {filter, map, pairwise, take, takeUntil} from "rxjs/operators";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {Router, RoutesRecognized} from "@angular/router";
import {AnalyticsService} from "./analytics.service";


@Injectable()
export class PaginationService {

    constructor(private _fireStore: AngularFirestore,
                private router: Router,
                private analytics: AnalyticsService) {
        this.router.events
            .pipe(filter(e => e instanceof RoutesRecognized), pairwise(), map((e: [RoutesRecognized, RoutesRecognized]) => e[0].url))
            .subscribe((prev: string) => {
                if(prev.includes('/listing')){
                    this.needsScroll = true
                    console.log("auto scrolling")
                }else {
                    this.needsScroll = false;
                }
                // prev.includes('/listing') ? this.needsScroll = true : this.needsScroll = false;
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
        // console.log(this.queryOptions.filters);
        if (this.queryOptions.filters != null) {
            for(let filter in this.queryOptions.filters){
                // console.log(filter);
                // console.log(this.queryOptions.filters[filter]);
                if(filter != 'sort' && filter != 'direction'){
                    if(filter == 'value'){
                        if(this.queryOptions.filters[filter][0] != null){
                            query = query.where('price.value', '>=', this.queryOptions.filters[filter][0]);
                        }
                        if(this.queryOptions.filters[filter][1] != null){
                            query = query.where('price.value', '<=', this.queryOptions.filters[filter][1]);
                        }
                    }else{
                        query = query.where(filter, '==', this.queryOptions.filters[filter]);
                    }
                }
            }
        }
        return query;
    }

    getInitialData() {
        this.sendSearchAnalytics();
        let col = this._fireStore.collection('cars', ref => {
            let query: Query = ref;
            query = this.addFilters(query);

            query = query.orderBy(this.queryOptions.sort, this.queryOptions.reverse ? 'asc' : 'desc');

            query = query.limit(this.queryOptions.size);
            return query;
        });
        this.mapResponse(col);
    }

    handleScroll() {
        console.log("getting others");
        this.sendNextPageAnalytics();
        let col = this._fireStore.collection('cars', ref => {
            let query: Query = ref;
            query = this.addFilters(query);
            query = query.orderBy(this.queryOptions.sort, this.queryOptions.reverse ? 'asc' : 'desc');
            query = query.limit(this.queryOptions.size);
            this.listings[this.listings.length - 1] != null ? query = query.startAfter(this.listings[this.listings.length - 1].doc) : {};
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
                    // console.log(this.listings);
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

    sendSearchAnalytics(){
        this.analytics.eventEmitter(
            'search',
            'search_tracking',
            'search',
            this.queryOptions.filters == null ? 'all' : 'with_filters',
            this.queryOptions.filters);
    }
    sendNextPageAnalytics(){
        this.analytics.eventEmitter(
            'next_page',
            'search_tracking',
            'search',
            this.queryOptions.filters == null ? 'all' : 'with_filters',
            this.queryOptions.filters);
    }
}