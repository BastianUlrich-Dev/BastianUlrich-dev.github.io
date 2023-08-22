import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto01RoutingModule } from './proyecto01-routing.module';
import { Proyecto01Component } from './proyecto01.component';


@NgModule({
  declarations: [
    Proyecto01Component
  ],
  imports: [
    CommonModule,
    Proyecto01RoutingModule
  ]
})
export class Proyecto01Module { }
