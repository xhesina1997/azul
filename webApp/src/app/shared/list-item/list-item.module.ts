import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemComponent} from './list-item.component';
import {MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [ListItemComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatDividerModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [ListItemComponent]
})
export class ListItemModule {
}
