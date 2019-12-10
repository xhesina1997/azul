import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MobileComponent} from "./mobile.component";

const routes: Routes = [{
    path: '',
    component: MobileComponent,
    children: [
        {
            path: 'home',
            loadChildren: '../pages/home/home.module#HomeModule'
        },
        {
            path: 'search',
            loadChildren: '../pages/listings/listings.module#ListingsModule'
        },
        {
            path: 'account',
            loadChildren: '../pages/account/account.module#AccountModule'
        },
        {
            path: 'listing',
            loadChildren: '../pages/listing/listing.module#ListingModule'
        },
        {
            path: 'add-listing',
            loadChildren: '../pages/create/create.module#CreateModule'
        },
        {
            path: 'edit-listing',
            loadChildren: '../pages/create/create.module#CreateModule'
        },
        {
            path: '', redirectTo: 'search', pathMatch: 'full'
        },
        {
            path: '**', redirectTo: 'search'
        }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
