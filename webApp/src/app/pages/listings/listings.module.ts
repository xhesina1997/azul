import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListingsRoutingModule} from './listings-routing.module';
import {ListingsComponent} from './listings.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatRippleModule, MatSnackBarModule} from "@angular/material";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {SharedModule} from "../../shared/shared.module";
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {ListItemModule} from "../../shared/list-item/list-item.module";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatChipsModule} from '@angular/material/chips';
import {DisplayFilterPipe} from "../../pipes/display-filter.pipe";

import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
    declarations: [
        ListingsComponent,
        DisplayFilterPipe
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatPaginatorModule,
        MatSelectModule,
        FormsModule,
        MatIconModule,
        ListingsRoutingModule,
        MatRippleModule,
        MatChipsModule,
        ListItemModule,
        MatBottomSheetModule,
        MatSnackBarModule,
        ScrollingModule,
        SharedModule
    ],
})
export class ListingsModule {
}
