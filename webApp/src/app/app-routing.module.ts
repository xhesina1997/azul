import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: 'mobile', loadChildren: './mobile/mobile.module#MobileModule'},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    {path: '', redirectTo: 'mobile', pathMatch: 'full'},
    {path: '**', redirectTo: 'mobile'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
