import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule, MatDividerModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AuthRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDividerModule,
    
    
 
  ],
  providers: [
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
