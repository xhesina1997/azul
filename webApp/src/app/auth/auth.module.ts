import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FlexModule} from "@angular/flex-layout";


@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatCardModule,
        FlexModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatButtonModule
    ]
})
export class AuthModule {
}
