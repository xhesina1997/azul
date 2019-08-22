import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService {

  constructor(
      private httpClient: HttpClient
  ) { }

  signUp(signUpData: any) {
    return this.httpClient.post(environment.apiUrl + "auth/signup", signUpData,
        {responseType: 'json', headers: {'Content-Type': 'application/json'}})
        .pipe(map(res  => {
          return res
        }));
  }

  signIn(signInData: any) {
    return this.httpClient.post(environment.apiUrl + "auth/signin", signInData,
        {responseType: 'json', headers: {'Content-Type': 'application/json'}})
        .pipe(map(res  => {
          return res
        }));
  }
}
