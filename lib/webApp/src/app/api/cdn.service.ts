import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CdnService {

    constructor(private http: HttpClient) {
    }

    uploadImage(image, imageName, directory) {
        let body = new FormData();
        body.append('file', image, imageName);
        return this.http.post(environment.cdnUrl + 'directory/' + directory + "/name/" + imageName, body).pipe(map(res => {
            return res
        }));
    }

}
