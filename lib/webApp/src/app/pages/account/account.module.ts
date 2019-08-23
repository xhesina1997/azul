import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {AccountComponent} from "./account.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTabsModule, MatIconModule, MatDividerModule, MatDialogModule, MatButtonModule} from "@angular/material";
import { ListItemModule } from 'src/app/shared/list-item/list-item.module';

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
        MatButtonModule
    ]
})
export class AccountModule {
}
