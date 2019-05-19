import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateListingRoutingModule} from './create-listing-routing.module';
import {CreateListingComponent} from "./create-listing.component";
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    declarations: [CreateListingComponent],
    imports: [
        CommonModule,
        MatCardModule,
        CreateListingRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        FlexLayoutModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule
    ]
})
export class CreateListingModule {
}
