import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListingRoutingModule} from './listing-routing.module';
import {ListingComponent} from './listing.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatIconModule} from "@angular/material";
import {MatCardModule} from "@angular/material/card";
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [ListingComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        ListingRoutingModule,
        CarouselModule,
        MatIconModule
    ]
})
export class ListingModule {
}
