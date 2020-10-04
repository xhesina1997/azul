import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScoutComponent} from "./scout.component";
import {ScoutResultsComponent} from "./scout-results/scout-results.component";

const routes: Routes = [
    {
      path: '',
      component: ScoutComponent
    },
    {
      path: 'results',
      component: ScoutResultsComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoutRoutingModule { }
