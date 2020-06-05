import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../auth/authentication.service";
import {Router} from "@angular/router";
import {map, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs/index";
import {AngularFirestore, Query} from "@angular/fire/firestore";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

    constructor(public authenticationService: AuthenticationService,
                private _fireStore: AngularFirestore,
                private router: Router,) {
        AuthenticationService.loginSubject
            .pipe(takeUntil(this.unSubscribeAuthSubject))
            .subscribe(user => {
                if (user) {
                    if(user.email == 'rei23b@gmail.com'){
                        this.verificationPassed = true
                        this.user = user;
                    }
                }
            });
        //
        // if(authenticationService.user = null){
        //     this.router.navigate(['/home'])
        // }else if(authenticationService.user.email != 'rei23b@gmail.com'){
        //     this.router.navigate(['/home'])
        // }else{
        //   this.verificationPassed = true
        // }
    }

    public verificationPassed = false;
    public user = {};
    private unSubscribeAuthSubject: Subject<any> = new Subject();
    private stopSubscriptions: Subject<any> = new Subject();

    ngOnInit() {
    }

    ngOnDestroy(){
        this.unSubscribeAuthSubject.complete();
    }

    getCarData(){
        let col = this._fireStore.collection('cars', ref => {
            let query: Query = ref;
            query = query.orderBy('created', 'asc');
            query = query.limit(10);
            return query;
        });

        col.snapshotChanges().pipe(map((arr: any) => {
            return arr.map(snap => {
                const data = snap.payload.doc.data();
                const doc = snap.payload.doc;
                return {...data, doc}
            });
        })).pipe(takeUntil(this.stopSubscriptions)).subscribe(response => {
            console.log(response);
            this.generateUserReport(response)
            this.stopSubscriptions.next();
        });
    }

    generateUserReport(carData : any[]){
        let userReport = {
            created : Date.now(),
            users : carData.map(x => {return {user : x.publisher, phone: x.phoneNumber}}),
            lastItemDoc: carData[carData.length -1].doc,
        }
        console.log(userReport);
    }

}
