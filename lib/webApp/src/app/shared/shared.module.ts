import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container/container.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    declarations: [ContainerComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,

    ],
    exports: [
        ContainerComponent
    ]
})
export class SharedModule {
}
