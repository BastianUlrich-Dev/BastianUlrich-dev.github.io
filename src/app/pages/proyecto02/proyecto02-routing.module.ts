import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto02Component } from './proyecto02.component';

const routes: Routes = [
  {
    path: '',
    component: Proyecto02Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Proyecto02RoutingModule { }
