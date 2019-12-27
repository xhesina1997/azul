import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateRoutingModule} from './create-routing.module';
import {CreateComponent} from './create.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule
} from "@angular/material";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
// import filepond module
import * as FilePond from 'filepond';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import { TranslateModule} from '@ngx-translate/core';
// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
FilePond.registerPlugin(FilePondPluginFileValidateType,  FilePondPluginImagePreview,FilePondPluginImageExifOrientation,FilePondPluginImageResize,FilePondPluginImageTransform ,FilePondPluginFileRename);

@NgModule({
    declarations: [CreateComponent],
    imports: [
        CommonModule,
        CreateRoutingModule,
        MatCardModule,
        FlexLayoutModule,
        MatDividerModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        FilePondModule,
        FormsModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        MatInputModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class CreateModule {
}
