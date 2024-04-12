import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto04Component } from './proyecto04.component';

const routes: Routes = [
  { path: '',
   component: Proyecto04Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Proyecto04RoutingModule { }
