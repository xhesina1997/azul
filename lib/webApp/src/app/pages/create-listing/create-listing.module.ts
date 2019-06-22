import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingRoutingModule } from './create-listing-routing.module';
import { CreateListingComponent } from "./create-listing.component";
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);


@NgModule({
    declarations: [CreateListingComponent],
    imports: [
        CommonModule,
        MatCardModule,
        CreateListingRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        FilePondModule,
        FlexLayoutModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        HttpClientModule
    ]
})
export class CreateListingModule {
}
