import { Injectable } from '@angular/core';
import {AuthenticationApiService} from "../api/authentication-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
      private authenticationApiService: AuthenticationApiService
  ) { }

  public user: any;

  public signIn(usernameOrEmail: string, password: string) {
    return new Promise((resolve, reject) => {
      let singInRequestData: any = {
        usernameOrEmail: usernameOrEmail,
        password: password
      }
      this.authenticationApiService.signIn(singInRequestData).subscribe((data:any) => {
        console.log(data);
        this.user = data.user;
        resolve(data);
      }, error => {
        console.log(error);
        reject(error);
      })
    })

  }
}
