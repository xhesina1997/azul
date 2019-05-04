import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent],
  exports : [
    PagesComponent
  ]
})
export class PagesModule { }
