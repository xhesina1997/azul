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
    MatIconModule,
    MatSelectModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [ContainerComponent, CarFiltersComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
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
