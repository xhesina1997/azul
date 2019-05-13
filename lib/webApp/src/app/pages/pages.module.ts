import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,

        MatToolbarModule,
        FlexLayoutModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        PagesRoutingModule
    ]
})
export class PagesModule {
}
