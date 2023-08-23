import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Proyecto01RoutingModule } from './proyecto01-routing.module';
import { Proyecto01Component } from './proyecto01.component';


@NgModule({
  declarations: [
    Proyecto01Component
  ],
  imports: [
    CommonModule,
    Proyecto01RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[Proyecto01Component]
})
export class Proyecto01Module { }
