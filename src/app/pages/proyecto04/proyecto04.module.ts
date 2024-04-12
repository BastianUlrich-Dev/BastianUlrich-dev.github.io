import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto04RoutingModule } from './proyecto04-routing.module';
import { Proyecto04Component } from './proyecto04.component';


@NgModule({
  declarations: [
    Proyecto04Component
  ],
  imports: [
    CommonModule,
    Proyecto04RoutingModule
  ]
})
export class Proyecto04Module { }
