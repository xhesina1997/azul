import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {AuthGuardService} from "../auth/guards/auth-guard.service";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'listings',
                loadChildren: './listings/listings.module#ListingsModule'
            },
            {
                path: 'listing',
                loadChildren: './listing/listing.module#ListingModule'
            },
            {
                path: 'create',
                loadChildren: './create-listing/create-listing.module#CreateListingModule'
            },
            {
                path: 'account',
                loadChildren: './account/account.module#AccountModule',
                canActivate: [AuthGuardService],
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
