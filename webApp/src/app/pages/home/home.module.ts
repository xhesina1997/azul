import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatButtonModule, MatDividerModule, MatIconModule, MatRippleModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../../shared/shared.module";
import {ListItemModule} from "../../shared/list-item/list-item.module";
import { TranslateModule} from '@ngx-translate/core';
@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        SharedModule,
        ListItemModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        FlexLayoutModule,
        HomeRoutingModule,
        TranslateModule
    ]
})
export class HomeModule {
}
