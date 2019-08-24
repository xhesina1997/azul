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

    searchCars(parameters) {
        return this.http.get(environment.apiUrl + 'metadata/cars/search', {params: parameters}).pipe(map(res => {
            return res;
        }));
    }

    getCarsByUsername(username){
        return this.http.get(environment.apiUrl + 'metadata/cars/user/'+username).pipe(map(res => {
            return res;
        }));
    }

    getAllCarModels() {
        return this.http.get(environment.apiUrl + 'metadata/cars/models').pipe(map(res => {
            return res;
        }));
    }

    getAllCarBrands() {
        return this.http.get(environment.apiUrl + 'metadata/cars/brands').pipe(map(res => {
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

    deleteCar(car){
        return this.http.post(environment.apiUrl + "metadata/cars/delete", car)
            .pipe(map(res  => {
                return res
            }));
    }

    addUserWhoFavourite(userId,postId){
        return this.http.get(environment.apiUrl + 'metadata/cars/userId/'+userId+"/postId/"+postId).pipe(map(res => {
            return res;
        }));
    }
}
