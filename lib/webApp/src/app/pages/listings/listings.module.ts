import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListingsRoutingModule} from './listings-routing.module';
import {ListingsComponent} from './listings.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [ListingsComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatPaginatorModule,
        ListingsRoutingModule,
        SharedModule
    ]
})
export class ListingsModule {
}
