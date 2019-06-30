import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';

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
