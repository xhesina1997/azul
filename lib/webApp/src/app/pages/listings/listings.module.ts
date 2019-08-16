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
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [ListingsComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatPaginatorModule,
        MatSelectModule,
        FormsModule,
        MatIconModule,
        ListingsRoutingModule,
        SharedModule
    ]
})
export class ListingsModule {
}
