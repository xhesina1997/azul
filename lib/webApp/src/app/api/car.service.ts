import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {
    }

    getAllCars() {
        return this.http.get(environment.apiUrl + 'metadata/cars/all').pipe(map(res => {
            return res;
        }));
    }

    getCarByUUID(uuid){
        return this.http.get(environment.apiUrl + 'metadata/cars/uuid/'+uuid).pipe(map(res => {
            return res;
        }));
    }

    uploadCar(car) {
        return this.http.post(environment.apiUrl + "metadata/cars/upload", car,
            {responseType: 'text', headers: {'Content-Type': 'application/json'}})
            .pipe(map(res  => {
                return res
            }));
    }

}
