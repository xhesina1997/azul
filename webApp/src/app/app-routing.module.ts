import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './mobile/mobile.module#MobileModule'},
    {path: '', redirectTo: 'mobile', pathMatch: 'full'},
    {path: '**', redirectTo: 'mobile'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
