import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,

    MatToolbarModule,

    PagesRoutingModule
  ]
})
export class PagesModule { }
