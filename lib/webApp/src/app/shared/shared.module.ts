import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container/container.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { CarFiltersComponent } from './car-filters/car-filters.component';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatSelectModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng5SliderModule} from "ng5-slider";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";

@NgModule({
    declarations: [ContainerComponent, CarFiltersComponent],
    imports: [
        CommonModule,
        MatInputModule,
        FlexLayoutModule,
        Ng5SliderModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule
    ],
    exports: [
        ContainerComponent,
        CarFiltersComponent
    ]
})
export class SharedModule {
}
