import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatButtonModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";
import {ListItemModule} from "../../shared/list-item/list-item.module";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        SharedModule,
        ListItemModule,
        MatButtonModule,
        FlexLayoutModule,
        HomeRoutingModule
    ]
})
export class HomeModule {
}