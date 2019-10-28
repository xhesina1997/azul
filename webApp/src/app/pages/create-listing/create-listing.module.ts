import { NgModule, forwardRef } from '@angular/core';
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
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// import filepond module
import * as FilePond from 'filepond';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
FilePond.registerPlugin(FilePondPluginFileValidateType,  FilePondPluginImagePreview,FilePondPluginImageExifOrientation,FilePondPluginImageResize,FilePondPluginImageTransform );
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
    declarations: [CreateListingComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
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
        NgxMatSelectSearchModule,
        RichTextEditorAllModule,
        
    ],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CreateListingComponent),  
          multi: true
        }
      ]
})
export class CreateListingModule {
}
