import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto02RoutingModule } from './proyecto02-routing.module';
import { Proyecto02Component } from './proyecto02.component';


@NgModule({
  declarations: [
    Proyecto02Component
  ],
  imports: [
    CommonModule,
    Proyecto02RoutingModule
  ]
})
export class Proyecto02Module { }
