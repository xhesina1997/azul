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
        return this.http.get(environment.apiUrl + '/cars/all').pipe(map(res => {
            return res;
        }));
    }

    uploadCar(car) {
        return this.http.post(environment.apiUrl + "cars/upload", car,
            {responseType: 'text', headers: {'Content-Type': 'application/json'}})
            .pipe(map(res  => {
                return res
            }));
    }

}
