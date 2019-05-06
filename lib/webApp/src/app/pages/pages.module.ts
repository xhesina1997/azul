import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,

        MatToolbarModule,
        FlexLayoutModule,
        SharedModule,

        PagesRoutingModule
    ]
})
export class PagesModule {
}
