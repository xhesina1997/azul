import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListingsRoutingModule} from './listings-routing.module';
import {ListingsComponent} from './listings.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material";
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [ListingsComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        ListingsRoutingModule
    ]
})
export class ListingsModule {
}
