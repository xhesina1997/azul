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
import {FormsModule} from "@angular/forms";
import {Ng5SliderModule} from "ng5-slider";

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
        FormsModule
    ],
    exports: [
        ContainerComponent,
        CarFiltersComponent
    ]
})
export class SharedModule {
}
