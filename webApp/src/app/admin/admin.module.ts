import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {MatButtonModule, MatDividerModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatDividerModule,
        FlexLayoutModule,
        MatButtonModule
    ]
})
export class AdminModule {
}
