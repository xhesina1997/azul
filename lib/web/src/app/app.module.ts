import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {BaseLayoutModule} from './base-layout/base-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BaseLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
