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
    return this.httpClient.post(environment.apiUrl + "api/auth/signup", signUpData,
        {responseType: 'text', headers: {'Content-Type': 'application/json'}})
        .pipe(map(res  => {
          return res
        }));
  }

  signIn(signInData: any) {
    return this.httpClient.post(environment.apiUrl + "api/auth/signin", signInData,
        {responseType: 'text', headers: {'Content-Type': 'application/json'}})
        .pipe(map(res  => {
          return res
        }));
  }
}
