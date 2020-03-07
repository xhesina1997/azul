import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from "./account.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTabsModule, MatIconModule, MatDividerModule, MatDialogModule, MatButtonModule} from "@angular/material";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {TranslateModule} from '@ngx-translate/core';
import {ListItemModule} from "../../shared/list-item/list-item.module";

@NgModule({
    declarations: [AccountComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatTabsModule,
        AccountRoutingModule,
        ListItemModule,
        MatIconModule,
        MatDividerModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatButtonModule,
        TranslateModule
    ]
})
export class AccountModule {
}
