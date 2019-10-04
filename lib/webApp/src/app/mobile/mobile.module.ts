import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule} from "@angular/material";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [MobileComponent],
  imports: [
      CommonModule,
      FlexLayoutModule,
      SharedModule,
      MatIconModule,
      MatButtonModule,
      MatDividerModule,
      MatListModule,
      MobileRoutingModule
  ]
})
export class MobileModule { }
