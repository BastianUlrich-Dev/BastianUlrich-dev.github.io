import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto01Component } from './proyecto01.component';

const routes: Routes = [
  {
    path: '',
    component: Proyecto01Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Proyecto01RoutingModule { }
