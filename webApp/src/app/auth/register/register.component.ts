import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
    }

      name: string;
      username: string;
      email: string;
      password: string;

    ngOnInit() {
    }

    submit(): void {
        let singUpRequestData: any = {
            name: this.name,
            username: this.username,
            // email: this.email,
            password: this.password
        }
        // this.authenticationApiService.signUp(singUpRequestData).subscribe(data => {
        //     this.authenticationService.signIn(this.username, this.password).then(() => {
        //         this.router.navigate(['/search']);
        //     });
        // }, error => {
        //     console.log(error);
        // })

    }

}
