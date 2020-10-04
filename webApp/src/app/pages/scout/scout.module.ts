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
import { ScoutResultsComponent } from './scout-results/scout-results.component';
import {ListItemModule} from "../../shared/list-item/list-item.module";

@NgModule({
    declarations: [ScoutComponent, ScoutResultsComponent],
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
        ListItemModule,
        MatSelectModule
    ]
})
export class ScoutModule {
}
