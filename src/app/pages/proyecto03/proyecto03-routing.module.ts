import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto03Component } from './proyecto03.component';

const routes: Routes = [
  {
    path: '',
    component: Proyecto03Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Proyecto03RoutingModule { }
