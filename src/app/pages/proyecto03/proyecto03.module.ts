import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto03RoutingModule } from './proyecto03-routing.module';
import { Proyecto03Component } from './proyecto03.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Proyecto03Component
  ],
  imports: [
    CommonModule,
    Proyecto03RoutingModule,
    FormsModule
  ],
  exports:[Proyecto03Component]
})
export class Proyecto03Module { }
