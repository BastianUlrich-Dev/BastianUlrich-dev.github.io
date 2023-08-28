import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto02RoutingModule } from './proyecto02-routing.module';
import { Proyecto02Component } from './proyecto02.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    Proyecto02Component,
    NavComponent
  ],
  imports: [
    CommonModule,
    Proyecto02RoutingModule
  ]
})
export class Proyecto02Module { }
