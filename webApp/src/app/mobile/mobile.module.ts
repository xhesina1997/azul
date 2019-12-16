import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MobileRoutingModule} from './mobile-routing.module';
import {MobileComponent} from './mobile.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule, MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {SharedModule} from "../shared/shared.module";
import {PaginationService} from "../services/pagination.service";

@NgModule({
    declarations: [MobileComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        SharedModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatProgressBarModule,
        MobileRoutingModule
    ],
    providers: [PaginationService]
})
export class MobileModule {
}
