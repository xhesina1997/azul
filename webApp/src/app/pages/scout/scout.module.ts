import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ScoutRoutingModule} from './scout-routing.module';
import {ScoutComponent} from './scout.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [ScoutComponent],
    imports: [
        CommonModule,
        ScoutRoutingModule,
        FlexLayoutModule,
        MatDividerModule,
        MatButtonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class ScoutModule {
}
